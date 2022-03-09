FROM node:16.14.0-alpine3.14

WORKDIR /app

EXPOSE 3000
COPY package.json package-lock.json ./
RUN npm install --silent
COPY . ./
RUN chmod 666 /app/node_modules/.cache/.eslintcache

CMD ["npm", "start"]