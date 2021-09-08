# Dockerfile from React Frontend

FROM node:15

WORKDIR /usr/src/app

COPY package*.json ./

###  Installing dependencies
RUN npm install

# copy local files to app folder
COPY . .

EXPOSE 3000

CMD ["npm","start"]