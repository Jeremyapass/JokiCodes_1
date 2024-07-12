FROM node:21.10.0-alpine3.15

WORKDIR /usr/src/app

COPY . .
RUN npm install
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]