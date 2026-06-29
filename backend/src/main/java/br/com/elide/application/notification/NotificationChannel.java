package br.com.elide.application.notification;

public interface NotificationChannel {
    String name();

    void send(NotificationEvent event);
}
