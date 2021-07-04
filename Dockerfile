# Stage 1:build angular application
FROM node:latest as build
WORKDIR /usr/local/app
COPY ./ /usr/local/app/
RUN npm install
RUN npm run build

# Stage 2: serve application with nginx
FROM nginx:1.21.0-alpine
COPY --from=build /usr/local/app/dist/angularhelloclient /usr/share/nginx/html
EXPOSE 80
