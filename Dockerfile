FROM node:16 AS build

# Встановлюємо робочу директорію всередині контейнера
WORKDIR /app

COPY /app/HBH_houseBuildHub/repository/frontend/package*.json ./

RUN npm install

WORKDIR /app

COPY . .

# Виконуємо побудову проекту Angular
RUN npm run build --prod

# Відкриваємо порт 80 для доступу до веб-сервера
EXPOSE 80

# Запускаємо nginx
CMD ["ng", "serve"]
