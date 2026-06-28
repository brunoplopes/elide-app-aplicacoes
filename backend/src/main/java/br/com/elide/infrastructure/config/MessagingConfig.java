package br.com.elide.infrastructure.config;

import org.springframework.amqp.core.TopicExchange;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class MessagingConfig {
    @Bean
    TopicExchange orderExchange() {
        return new TopicExchange("elide.orders", true, false);
    }

    @Bean
    TopicExchange notificationExchange() {
        return new TopicExchange("elide.notifications", true, false);
    }
}

