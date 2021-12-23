# Build Stage
FROM node:16 as build-stage

WORKDIR /app

COPY package*.json ./

# Must install angular/cli globally to be able to run ng build
RUN npm install -g @angular/cli && npm install

COPY ./ .

RUN ng build


# Prod stage
FROM nginx:1.20 as production-stage

RUN mkdir /app

COPY --from=build-stage /app/dist /app

COPY ./nginx.conf /etc/nginx/nginx.conf

EXPOSE 80 443

ENTRYPOINT [ "nginx" ]

CMD [ "-g", "daemon off;" ]
