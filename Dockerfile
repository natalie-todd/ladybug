# pull official base image
FROM node:latest

# set working directory
WORKDIR /app

# install app dependencies
COPY ./package.json ./
RUN npm install -g create-react-app@3.4.1
RUN npm i react-scripts
# install 
RUN npm install 

COPY ./ ./

ENV PATH /app/node_modules/.bin:$PATH

# start app
CMD ["yarn", "start"]