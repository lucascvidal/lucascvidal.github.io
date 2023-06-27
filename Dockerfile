FROM ruby:2.7-alpine

RUN apk update
RUN apk add --no-cache build-base gcc cmake git

RUN gem update bundler
RUN bundle install && bundle update
