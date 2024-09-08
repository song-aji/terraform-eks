# Node.js를 기반으로 한 Docker 이미지
FROM node:16

# 애플리케이션 디렉토리 생성
WORKDIR /usr/src/app

# package.json과 package-lock.json 파일을 복사하여 의존성 설치
COPY package*.json ./

RUN npm install

# 애플리케이션 소스 코드 복사
COPY . .

# 애플리케이션을 3000 포트에서 실행
EXPOSE 3000

# 애플리케이션 실행
CMD [ "npm", "start" ]

