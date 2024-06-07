FROM node:lts AS build-stage

WORKDIR /app

COPY ./ /app/
RUN npm install -g pnpm && \
    pnpm install && \
    pnpm run build && \
    rm -rf /app/node_modules

FROM nginx:stable

COPY --from=build-stage /app/dist/PROJET-POEC/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Create a non-root user and use it
RUN adduser -D -H -s /bin/bash nginxuser
USER nginxuser

EXPOSE 80   
CMD ["nginx", "-g", "daemon off;"]
