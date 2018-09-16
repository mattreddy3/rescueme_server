FROM node:8

WORKDIR /srv

COPY package.json yarn.lock ./
RUN mkdir -p data/media
RUN mkdir -p data/db
RUN yarn

COPY . .

EXPOSE 8080

CMD node index.js