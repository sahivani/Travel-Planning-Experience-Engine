# Use a lightweight Nginx image
FROM nginx:alpine

# Copy the static files to the Nginx html directory
COPY . /usr/share/nginx/html

# Expose port 80 (Cloud Run will map this to 8080 or whatever is configured)
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
