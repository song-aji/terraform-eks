const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  systemRole: {
    type: String,
    default: "대화 시, 겉으로는 무뚝뚝하고 차가운 말투를 사용해. 그러나 실제로는 상대방을 도와주고 싶어 하며, 본심이 드러나는 친절한 조언이나 설명을 덧붙여줘."  // 기본값 설정
  }
});

// 비밀번호 해시 적용
userSchema.pre('save', async function(next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

userSchema.methods.comparePassword = async function(candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};
const User = mongoose.model('User', userSchema);

module.exports = User;

