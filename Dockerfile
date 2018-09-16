FROM node:8

WORKDIR /srv

COPY package.json yarn.lock ./
RUN mkdir -p media
RUN mkdir -p uploads
RUN yarn

COPY . .

EXPOSE 8080

CMD node index.js