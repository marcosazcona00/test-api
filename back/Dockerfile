FROM node:20.12.2
WORKDIR /docker

COPY . .

RUN rm package-lock.json
RUN rm -r node_modules

RUN npm i
RUN npm i pm2 -g

EXPOSE 3001
CMD pm2 start ecosystem.config.js


