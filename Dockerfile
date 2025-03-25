# Use official Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files first (for caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files
COPY . .

# Environment variables (use --build-arg for sensitive data)
ENV PORT=5000 \
    NODE_ENV=production

# Expose the app port
EXPOSE 5000

# Start command
CMD ["node", "server.js"]