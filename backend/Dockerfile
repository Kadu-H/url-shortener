FROM node:22.18-alpine

WORKDIR /usr/server

COPY package*.json ./
RUN npm install -g npm@11.5.2
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
