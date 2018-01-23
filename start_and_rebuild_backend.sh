#!/bin/bash

docker-compose down
docker container rm `docker container ls -a | grep noteapp_notes_1 | cut -d' ' -f1`
docker image rm noteapp_notes

cd notes_backend
mvn clean install
cd ..

docker-compose up
