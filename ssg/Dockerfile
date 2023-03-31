FROM node:16-alpine AS deps
WORKDIR /app
COPY package.json ./
RUN yarn install

FROM node:16-alpine as builder

# set working directory
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY . .

COPY --from=deps /app/node_modules ./node_modules
RUN yarn build


FROM nginx:1.17.3-alpine AS frontend

COPY ./docker/nginx/nginx.conf /etc/nginx/nginx.conf

COPY --from=builder /app/out /usr/share/nginx/html
