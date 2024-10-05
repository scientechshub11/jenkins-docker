FROM node:20-alpine as builder

WORKDIR /user/src/app

COPY package*.json .
RUN npm install

COPY . .

EXPOSE 8080
CMD ["node" "index.js"]