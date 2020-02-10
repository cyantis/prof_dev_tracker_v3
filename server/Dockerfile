FROM ruby:2.6.1-slim-stretch
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev && \
    apt-get install -y nodejs && \
    mkdir /app
WORKDIR /app
COPY Gemfile /app/Gemfile
COPY Gemfile.lock /app/Gemfile.lock
RUN gem install bundler && bundle install
COPY . /app