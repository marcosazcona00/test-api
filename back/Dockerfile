FROM node:20.12.2
WORKDIR /docker

COPY . .

RUN rm package-lock.json
RUN rm -rf node_modules

RUN npm i
RUN npm i pm2 -g

EXPOSE 3001
CMD npm run start

