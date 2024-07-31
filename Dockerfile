FROM node:latest

# Встановлюємо робочу директорію всередині контейнера
WORKDIR /app

COPY . .

WORKDIR repository/frontend

RUN npm install

RUN ng build --configuration=production

EXPOSE 4200

CMD [ "ng", "serve" ]
