FROM node:12.10

WORKDIR /usr/src/app

COPY . .

RUN yarn
RUN yarn global add firebase-tools
RUN yarn build

CMD yarn start