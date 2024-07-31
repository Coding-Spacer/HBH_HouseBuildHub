FROM public.ecr.aws/docker/library/node:latest

# Встановлюємо робочу директорію всередині контейнера
WORKDIR /app

COPY . .

WORKDIR repository/frontend

RUN npm install

FROM public.ecr.aws/docker/library/nginx:alpine

COPY --from=build /app/dist/your-app-name /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
