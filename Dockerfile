FROM node:17-alpine3.14
LABEL maintainer="bykov.d.sta@sberbank.ru"
WORKDIR /usr/app/packages
COPY ./ /usr/app
RUN npm -v
RUN npm install
CMD ["npm","test"]
