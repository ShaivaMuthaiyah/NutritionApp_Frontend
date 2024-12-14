# Specify the base image
# FROM node:alpine

# RUN apk --no-cache add curl

# # Set the working directory
# WORKDIR /app

# # Copy the package.json and package-lock.json files
# COPY package*.json ./

# # Install the dependencies
# RUN npm install

# # Copy the app files
# COPY . .

# # environmental variable to communicate with backend
# ARG REACT_APP_API_URL
# ENV REACT_APP_API_URL=$REACT_APP_API_URL

# # Build the app
# RUN npm run build

# # Expose the port
# EXPOSE 3000

# # Run the app
# CMD ["npm", "start"]


# Use a lightweight Node image to build the React app
FROM node:alpine AS build

# Add curl to the image 
RUN apk --no-cache add curl

# Set the working directory
WORKDIR /app

# Copy only the necessary files for installation
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire app source
COPY . .

# Set the environment variable for API communication
ARG REACT_APP_API_URL
ENV REACT_APP_API_URL=$REACT_APP_API_URL

# Build the app
RUN npm run build

# Use an nginx server to serve the static files
FROM nginx:alpine

# Copy the React build output to nginx's web directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 for the web server
EXPOSE 80

# Start nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]