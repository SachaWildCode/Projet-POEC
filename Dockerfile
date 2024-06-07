FROM node:lts AS build-stage

WORKDIR /app

COPY ./ /app/
# Start Generation Here
RUN npm install -g pnpm
RUN pnpm install
RUN pnpm run build

FROM nginx:stable

RUN mkdir /app
COPY --from=build-stage /app/dist/PROJET-POEC /app
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80   
