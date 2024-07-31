FROM public.ecr.aws/docker/library/node:latest

# Встановлюємо робочу директорію всередині контейнера
WORKDIR /app

COPY . .

WORKDIR repository/frontend

RUN npm install

RUN ng build --prod
