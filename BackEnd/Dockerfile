FROM  amazoncorretto:11-alpine-jdk
MAINTAINER  MGB
COPY  target/mgb-0.0.1-SNAPSHOT.jar mrr-app.jar
EXPOSE 8080
ENTRYPOINT  ["java","-jar", "/mrr-app.jar"]
