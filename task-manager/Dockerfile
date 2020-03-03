FROM node:10
WORKDIR /usr/src/app
# add `/app/node_modules/.bin` to $PATH 
COPY package*.json ./
# install and cache app dependencies 
RUN npm install
COPY . . 
# start app 
EXPOSE 3000
CMD npm run dev