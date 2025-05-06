# Stage 1: Build backend image
FROM node:18 AS backend-builder

WORKDIR /app/backend
COPY ./backend/package*.json ./
RUN npm install
COPY ./backend ./

# Stage 2: Set up backend environment
FROM node:18 AS backend

WORKDIR /app/backend
COPY --from=backend-builder /app/backend /app/backend
EXPOSE 5001

# Command to run the backend (adjust it to your app's entry point)
CMD ["npm", "run", "dev"]