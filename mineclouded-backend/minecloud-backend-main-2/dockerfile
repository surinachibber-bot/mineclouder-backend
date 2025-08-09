# Use official Node image
FROM node:20

# Create app directory
WORKDIR /usr/src/app

# Copy files
COPY . .

# Install dependencies
RUN yarn install

# Build TypeScript
RUN yarn build

# Expose port
EXPOSE 3000

# Start the app
CMD ["node", "build/index.js"]
