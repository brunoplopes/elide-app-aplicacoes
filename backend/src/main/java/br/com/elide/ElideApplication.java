package br.com.elide;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;

@EnableCaching
@EnableJpaAuditing
@EnableMethodSecurity
@SpringBootApplication
public class ElideApplication {
    public static void main(String[] args) {
        SpringApplication.run(ElideApplication.class, args);
    }
}

