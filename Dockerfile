# Dockerfile for frontend landing page

# Use the official Node.js image as the base for building the app
FROM node:18 AS build
WORKDIR /app

# Copy the package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the entire application and build it
COPY . .
RUN npm run build

# Use a lightweight web server to serve the static files
FROM nginx:1.23
COPY --from=build /app/dist /usr/share/nginx/html

# Copy the custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 to access the application
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
