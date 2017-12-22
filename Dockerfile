FROM node

RUN mkdir /app

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 8000

CMD ["npm", "start"]
