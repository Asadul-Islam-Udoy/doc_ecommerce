# # Build React frontend
# FROM node:18 AS frontend-builder
# WORKDIR /app
# COPY ./frontend/package*.json ./
# RUN npm install
# COPY ./frontend .
# RUN npm run build

# # Serve with NGINX + SSL
# FROM nginx:alpine
# COPY nginx/nginx.conf /etc/nginx/nginx.conf
# COPY nginx/ssl/server.crt /etc/ssl/certs/server.crt
# COPY nginx/ssl/server.key /etc/ssl/private/server.key
# COPY --from=frontend-builder /app/build /usr/share/nginx/html

# # Copy custom NGINX config
# COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

# # Copy SSL certificates
# COPY ./nginx/ssl /etc/nginx/ssl

# EXPOSE 80
# EXPOSE 443

FROM node:18 AS frontend-builder
    
    WORKDIR /app/frontend
    COPY ./frontend/package*.json ./
    RUN npm install
    COPY ./frontend ./
    RUN npm run build
    
    # Stage 2: Setup NGINX to serve frontend
    FROM nginx:alpine
    COPY nginx/ssl/server.crt /etc/ssl/certs/server.crt
    COPY nginx/ssl/server.key /etc/ssl/private/server.key

    # Copy SSL certificates
     COPY ./nginx/ssl /etc/nginx/ssl
    # Copy the built React app to NGINX's html directory
    COPY --from=frontend-builder /app/frontend/build /usr/share/nginx/html
    
    # Expose NGINX ports (HTTP and HTTPS)
    EXPOSE 80
    EXPOSE 443
    
    # Custom NGINX config will be copied here
    COPY ./nginx/nginx.conf /etc/nginx/nginx.conf