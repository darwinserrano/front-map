FROM node:12.8.0-alpine

COPY package.json /app/package.json

WORKDIR /app

RUN yarn install

COPY . /app

CMD ["yarn", "start"]