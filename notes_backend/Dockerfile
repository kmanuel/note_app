FROM maven:3.5-jdk-8

EXPOSE 8080

RUN mkdir app

WORKDIR app

COPY ./target .

ENTRYPOINT ["java", "-jar", "backend-0.0.1-SNAPSHOT.jar"]
