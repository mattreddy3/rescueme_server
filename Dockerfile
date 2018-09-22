FROM node:8

WORKDIR /srv

COPY package.json yarn.lock ./
RUN mkdir -p media uploads
RUN yarn

COPY . .

EXPOSE 8080:80

CMD ["node", "index.js"]