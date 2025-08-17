FROM node:22.18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install -g npm@11.5.2
RUN npm install

COPY . .

RUN npx prisma generate

EXPOSE 3000

CMD ["npm", "start"]
