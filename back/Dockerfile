FROM node:20.12.2

WORKDIR /docker

ENV PORT=3003

COPY . .

RUN rm package-lock.json
RUN rm -rf node_modules
RUN npm i

EXPOSE 3003

CMD npm run start

