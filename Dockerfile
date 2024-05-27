FROM node:lts-alpine3.20

WORKDIR /app

COPY package*.json ./

RUN npm install --legacy-peer-deps

COPY . .

RUN npx tsc

CMD ["node", "dist/index.js"]