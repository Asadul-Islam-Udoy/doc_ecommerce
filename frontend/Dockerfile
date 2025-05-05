# Build React frontend
FROM node:18 AS frontend-builder
WORKDIR /app
COPY ./frontend/package*.json ./
RUN npm install
COPY ./frontend .
RUN npm run build

# Serve with NGINX + SSL
FROM nginx:alpine
COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY nginx/ssl/server.crt /etc/ssl/certs/server.crt
COPY nginx/ssl/server.key /etc/ssl/private/server.key
COPY --from=frontend-builder /app/build /usr/share/nginx/html

# Copy custom NGINX config
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

# Copy SSL certificates
COPY ./nginx/ssl /etc/nginx/ssl