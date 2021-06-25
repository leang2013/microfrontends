FROM node:15.5.0-alpine

COPY package*.json ./
COPY ./.npmrc ./

RUN npm install --no-optional

COPY ./webpack.config.js ./
COPY ./src ./src
COPY ./public ./public
COPY ./config ./config

RUN npm run build:prod

COPY ./server.js ./

EXPOSE 3000

CMD [ "npm", "run", "serve" ]