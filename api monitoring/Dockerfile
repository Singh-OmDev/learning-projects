# Use Node.js base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files first (for caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of app
COPY . .

# Create logs directory (since you're mounting it)
RUN mkdir -p /app/logs

# Expose port
EXPOSE 5000

# Start the app
CMD ["npm", "start"]