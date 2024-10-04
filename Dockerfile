FROM node:20-alpine as builder
ENV NODE_ENV = production
RUN mkdir -p /usr/src/app
WORKDIR /user/src/app
COPY package*.json .
RUN npm ci
COPY . .
EXPOSE 9000
CMD ["node" "index.js"]