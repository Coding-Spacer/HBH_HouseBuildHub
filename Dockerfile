FROM public.ecr.aws/docker/library/node:latest

ENTRYPOINT ["tail", "-f", "/dev/null"]

# Встановлюємо робочу директорію всередині контейнера
WORKDIR /app

COPY . .

WORKDIR repository/frontend

RUN npm install

RUN npm run build

CMD ["ng", "serve", "--host", "0.0.0.0"]
