package br.com.elide.application.notification;

import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Component;

@Component
public class WebSocketNotificationChannel implements NotificationChannel {
    private final SimpMessagingTemplate messaging;

    public WebSocketNotificationChannel(SimpMessagingTemplate messaging) {
        this.messaging = messaging;
    }

    @Override
    public String name() {
        return "websocket";
    }

    @Override
    public void send(NotificationEvent event) {
        messaging.convertAndSend("/topic/users/" + event.userId() + "/notifications", event);
    }
}
