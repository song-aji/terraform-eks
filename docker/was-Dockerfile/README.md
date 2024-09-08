# WANT-PIECE-WAS


실행할때 따라할것

sudo apt update  
sudo apt install git   
sudo apt install nodejs   
sudo apt install npm   
git clone https://github.com/leeSB096/WANT-PIECE-WAS   
cd WANT-PIECE-WAS   
npm install   
nano .env   
npm start   

# 백그라운드 실행시
sudo npm install -g pm2   
pm2 start index.js

그뒤에 ec2 5000번 포트 열기 (보안그룹 인바운드 규칙설정)
