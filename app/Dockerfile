FROM maven:3-jdk-8
ENV DB_HOST_IP="localhost"
WORKDIR /usr/src/app
COPY . ./
COPY wait-for-it.sh ./wait-for-it.sh
RUN chmod +x wait-for-it.sh
RUN mvn clean package
CMD java -jar target/accessing-data-mysql-0.0.1-SNAPSHOT.jar

