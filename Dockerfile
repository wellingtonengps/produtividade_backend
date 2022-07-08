FROM node:16.15.0-alpine
WORKDIR /usr/app
COPY package*.json ./
RUN npm install
COPY . .
ENV PORT=$PORT
EXPOSE $PORT
CMD ["npm","run","dev"]