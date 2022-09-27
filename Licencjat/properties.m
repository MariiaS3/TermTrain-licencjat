logging.level.org.springframework = INFO
logging.level.com.mkyong = INFO
logging.level.com.zaxxer = DEBUG
logging.level.root = ERROR

spring.datasource.hikari.connectionTimeout = 20000
spring.datasource.hikari.maximumPoolSize = 10
spring.datasource.url=jdbc:h2:mem:test
spring.datasource.username = sa
spring.datasource.password =

logging.pattern.console = %-5level %logger{36} - %msg%n
spring.h2.console.enabled=true
spring.h2.console.path=/h2-console

spring.jpa.hibernate.ddl-auto = create
spring.mvc.pathmatch.matching-strategy = ANT_PATH_MATCHER