# client/Dockerfile

# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY client/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY client ./

# Build the frontend app
RUN npm run build

# Run the Front End app
RUN npm run dev
