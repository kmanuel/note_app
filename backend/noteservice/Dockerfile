FROM maven:3.5-jdk-8

EXPOSE 8080

RUN mkdir app

WORKDIR app

COPY . .

RUN mvn clean install

WORKDIR ./target

ENTRYPOINT ["java", "-jar", "noteservice-0.0.1-SNAPSHOT.jar"]
