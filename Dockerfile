FROM nginx:1.29.1-alpine AS builder
WORKDIR /usr/share/nginx/html
COPY index.html styles.css script.js ./

FROM nginx:1.29.1-alpine
COPY --from=builder /usr/share/nginx/html /usr/share/nginx/html
EXPOSE 80
