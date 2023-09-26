FROM openjdk:17-alpine
RUN addgroup -S patitaspetshop && adduser -S admin -G patitaspetshop
USER admin:patitaspetshop
VOLUME /tmp
ARG JAR_FILE=target/*.jar
ADD target/${JAR_FILE} app.jar
ENV JAVA_OPTS=""
ENTRYPOINT ["sh", "-c", "java $JAVA_OPTS -Djava.security.egd=file:/dev/./urandom -jar /app.jar"]