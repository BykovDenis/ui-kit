FROM node:17-alpine3.14
LABEL maintainer=""description": "UI Kit","
WORKDIR /usr/app
COPY ./ /usr/app
RUN npm -v
RUN npm install
RUN cd /packages
RUN npm install
RUN cd ..
CMD ["npm","test"]
