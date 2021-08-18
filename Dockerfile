FROM node:10-alpine
WORKDIR /
COPY package.json .
RUN npm install
COPY . .
EXPOSE 18080
CMD node app.js
