FROM node:latest as build
WORKDIR repository/frontend
COPY package*.json ./
COPY . ./
RUN npm install -g @angular/cli

RUN npm install

CMD ["ng", "serve", "--host", "0.0.0.0"]
