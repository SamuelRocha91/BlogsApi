FROM node:16

RUN apt update

RUN apt install lsof

USER node
