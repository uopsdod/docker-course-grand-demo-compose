FROM maven:3-jdk-8
WORKDIR /usr/src/app
COPY . ./
RUN mvn clean package
RUN ls -l target
RUN chmod +x wait-for-it.sh && ls -l | grep wait
#ENTRYPOINT ["/bin/bash", "-c", "./wait-for-it.sh 172.90.0.1:3306 -- java -jar target/accessing-data-mysql-0.0.1-SNAPSHOT.jar"]

