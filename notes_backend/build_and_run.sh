#!/bin/bash
# builds and runs the note_backend application

mvn clean install
java -jar "target/backend-0.0.1-SNAPSHOT.jar"

