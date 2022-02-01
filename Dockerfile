FROM node:alpine

WORKDIR /app/myCommerceFront

COPY . ./

RUN yarn

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]
