# Nginx 이미지를 기본 이미지로 사용
FROM nginx:alpine

# GitHub의 리포지토리 파일을 Nginx 웹 루트 디렉토리로 복사
COPY ./my-web/public /usr/share/nginx/html

# Nginx가 포트 80에서 동작하도록 설정
EXPOSE 80

# Nginx 실행
CMD ["nginx", "-g", "daemon off;"]

