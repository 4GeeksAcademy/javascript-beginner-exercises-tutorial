FROM gitpod/workspace-full:latest

USER gitpod

RUN $ pip3 install pytest==4.4.2 pytest-testdox mock && npm i learnpack@0.0.88 -g && learnpack plugins:install learnpack-node@0.0.17
