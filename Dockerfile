FROM maneeshkumar/docker-selenium:1.0
RUN apt-get update
RUN apt-get install -y maven
RUN apt-get install
COPY pom.xml /usr/local/service/pom.xml
COPY src /usr/local/service/src
WORKDIR /usr/local/service
RUN mvn test