FROM node:alpine

#create app directory
WORKDIR /app

#install dependencies
COPY package.json /app

RUN npm install

COPY . .

EXPOSE 4000

CMD node app.js