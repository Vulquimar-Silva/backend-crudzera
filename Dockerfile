FROM node:18.15.0

EXPOSE 3000

WORKDIR /src

COPY . /src

RUN npm install

ENV DB_HOST=172.17.0.2
# ENV DB_HOST=postgres-api-prod

CMD npm start