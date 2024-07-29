FROM node:latest

# Встановлюємо робочу директорію всередині контейнера
WORKDIR /app

COPY . .

WORKDIR repository/frontend

RUN npm install


CMD [ "ng", "serve" ]
