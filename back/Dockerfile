FROM node:20.12.2

WORKDIR /backend

ENV PORT=3001

COPY . .

RUN rm package-lock.json
RUN rm -rf node_modules
RUN npm i

EXPOSE $PORT

CMD npm run start

