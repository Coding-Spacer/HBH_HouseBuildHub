# stage 1
FROM node:latest
WORKDIR /repository/frontend
COPY . .
RUN npm install
RUN npm run build --prod
EXPOSE 4200

CMD ["ng", "serve"]
