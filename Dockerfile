FROM public.ecr.aws/docker/library/node:latest

# Встановлюємо робочу директорію всередині контейнера
WORKDIR /app

COPY . .

WORKDIR repository/frontend

RUN npm install

RUN npm run build

EXPOSE 4200

CMD ["ng", "serve", "--host", "0.0.0.0"]
