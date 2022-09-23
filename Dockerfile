FROM node:16-alpine

# RUN mkdir -p /home/node/index/node_modules && chown -R node:node /home/node/server


WORKDIR /server

COPY package*.json .

USER node

RUN npm install

COPY  . .

EXPOSE 3001

CMD [ "node","npm", "start", "server.js" ]