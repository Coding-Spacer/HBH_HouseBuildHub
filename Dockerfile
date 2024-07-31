FROM node:latest

# Встановлюємо робочу директорію всередині контейнера
WORKDIR /app

COPY . .

WORKDIR repository/frontend

RUN npm install

RUN ng build --configuration=production

CMD [ "ng", "serve" ]
