FROM node:16 as production

ARG NODE_ENV=production

ENV NODE_ENV=${NODE_ENV}

WORKDIR /api

COPY package.json  .
COPY yarn.lock  .

RUN yarn global add @nest/cli 
RUN yarn install --production=true

RUN apt-get -q update & apt-get -qy install netcat

COPY . .

RUN yarn build

CMD [ "sh", "-c", "yarn typeorm migration:run && yarn start:prod" ]
