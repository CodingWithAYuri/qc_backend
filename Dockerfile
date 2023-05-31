# Base image
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the application code to the container
COPY . .

# Expose the port on which your Node.js app is listening
EXPOSE 3000

# Start the Node.js application
CMD [ "npm", "run", "start" ]
