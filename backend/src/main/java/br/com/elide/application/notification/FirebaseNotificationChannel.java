package br.com.elide.application.notification;

import org.springframework.stereotype.Component;

@Component
public class FirebaseNotificationChannel implements NotificationChannel {
    @Override
    public String name() {
        return "firebase-cloud-messaging";
    }

    @Override
    public void send(NotificationEvent event) {
        // Provider adapter prepared for FCM credentials and device tokens.
    }
}
