FROM node:20.12.2

WORKDIR /frontend

ENV PORT=3000

COPY . .

RUN rm package-lock.json
RUN rm -rf node_modules .nuxt .output 
RUN npm i
RUN npm run build

EXPOSE $PORT

CMD node .output/server/index.mjs
