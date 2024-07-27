FROM node:latest

# Встановлюємо робочу директорію всередині контейнера
WORKDIR /app

COPY . .

WORKDIR repository/frontend

RUN npm install

EXPOSE 8888

CMD [ "ng", "serve" ]
