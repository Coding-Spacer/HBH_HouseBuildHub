FROM node:16 AS build

# Встановлюємо робочу директорію всередині контейнера
WORKDIR /app

# Копіюємо package.json та package-lock.json в робочу директорію
COPY package*.json ./

# Встановлюємо залежності
RUN npm install

# Копіюємо весь код проекту в контейнер
COPY . .

# Виконуємо побудову проекту Angular
RUN npm run build --prod

# Відкриваємо порт 80 для доступу до веб-сервера
EXPOSE 80

# Запускаємо nginx
CMD ["ng", "serve"]
