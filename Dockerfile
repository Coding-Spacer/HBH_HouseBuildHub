FROM node:16 AS build

# Встановлюємо робочу директорію всередині контейнера
WORKDIR /app

COPY . .

RUN npm install

# Виконуємо побудову проекту Angular
RUN npm run build --prod

# Відкриваємо порт 80 для доступу до веб-сервера
EXPOSE 80

# Запускаємо nginx
CMD ["ng", "serve"]
