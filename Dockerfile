# FROM nginx
# COPY /dist/orgchart/ /usr/share/nginx/html
# COPY nginx.conf /etc/nginx/conf.d/default.conf



# Stage 1: Build
FROM node:19.6-alpine3.17 as builder

WORKDIR /app/

COPY package*.json /app/

COPY . /app

RUN npm install --force && npm run build


# Stage 2, use the compiled app, ready for production with Nginx
FROM nginxinc/nginx-unprivileged:1.23.3-alpine-slim
COPY --from=builder /app/dist/tachographweb /usr/share/nginx/html
EXPOSE 80
# COPY /nginx.conf /etc/nginx/conf.d/default.conf

