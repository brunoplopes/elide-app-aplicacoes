package br.com.elide.application.notification;

import org.springframework.stereotype.Component;

@Component
public class WhatsappNotificationChannel implements NotificationChannel {
    @Override
    public String name() {
        return "whatsapp";
    }

    @Override
    public void send(NotificationEvent event) {
        // Provider adapter prepared for WhatsApp Business API templates.
    }
}
