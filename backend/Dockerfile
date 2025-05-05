
# Second Stage: Backend Build (Express)
FROM node
WORKDIR /app

# Copy backend package.json and install dependencies
COPY ./backend/package*.json ./
RUN npm install

# Copy backend code
COPY ./backend ./



# Expose port 5000 for the backend
EXPOSE 5001

# Run the backend app (replace with actual start command if necessary)
CMD ["npm", "run", "dev"]
