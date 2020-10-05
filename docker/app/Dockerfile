FROM node:12.18.4-alpine3.9 as builder
WORKDIR app
COPY package*.json ./
COPY . .
RUN yarn && yarn build

# Production build
FROM nginx:1.16.0-alpine
COPY --from=builder /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY docker/nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
