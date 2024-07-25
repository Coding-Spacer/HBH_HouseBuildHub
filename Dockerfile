FROM node:latest

WORKDIR /repository/frontend

COPY . .

RUN npm install -g @angular/cli

RUN npm install

CMD ["ng", "serve", "--host", "0.0.0.0"]
