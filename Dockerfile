FROM node:16.14.2-alpine

WORKDIR /usr/app
RUN apk add git
RUN npm i -g @nestjs/cli
EXPOSE 3000

CMD ["npm", "run", "start:dev"]