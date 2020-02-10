#PRODUCTION IMAGE

FROM mhart/alpine-node:11 as wbuild
RUN apk add --no-cache bash
WORKDIR /usr/app
COPY ./client/package*.json ./
RUN npm install -qy
COPY ./client .
RUN npm run build

FROM ruby:2.6.1-slim-stretch
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev && \
    apt-get install -y nodejs && \
    mkdir /app
WORKDIR /app
COPY ./server/Gemfile /app/Gemfile
COPY ./server/Gemfile.lock /app/Gemfile.lock
RUN gem install bundler && bundle install
COPY ./server /app
COPY --from=wbuild /usr/app/build /app/public
CMD ["puma"]
