# Use a lightweight Nginx image
FROM nginx:alpine

# Copy the static files to the Nginx html directory
COPY . /usr/share/nginx/html

# Configure Nginx to listen on the port provided by Cloud Run (defaulting to 8080)
# We use a template to replace the port at runtime
RUN printf 'server {\n\
    listen       ${PORT};\n\
    server_name  localhost;\n\
    location / {\n\
        root   /usr/share/nginx/html;\n\
        index  index.html index.htm;\n\
        try_files $uri $uri/ /index.html;\n\
    }\n\
}\n' > /etc/nginx/conf.d/default.conf.template

# Use envsubst to replace ${PORT} with the actual environment variable at startup
CMD ["/bin/sh", "-c", "envsubst '${PORT}' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf && exec nginx -g 'daemon off;'"]
