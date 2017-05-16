FROM node:7.10.0

RUN mkdir -p /usr/src/app/src
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install && npm cache clean

COPY app.js /usr/src/app
COPY src /usr/src/app/src

EXPOSE 3000

CMD [ "npm", "start" ]