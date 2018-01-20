FROM maven:3.5-jdk-8

RUN mkdir /app

WORKDIR /app

COPY . .

EXPOSE 8080

ENTRYPOINT ["./build_and_run.sh"]
