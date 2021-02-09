FROM gitpod/workspace-full:latest

USER gitpod

RUN npm i jest@24.8.0 -g && npm i learnpack@0.0.73 -g && learnpack plugins:install learnpack-node@0.0.13
