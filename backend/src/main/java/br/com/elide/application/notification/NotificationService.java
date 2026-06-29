package br.com.elide.application.notification;

import br.com.elide.infrastructure.persistence.OperationalEntities.NotificationEntity;
import br.com.elide.infrastructure.persistence.UserEntity;
import br.com.elide.infrastructure.persistence.repository.NotificationRepository;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class NotificationService {
    private final NotificationRepository notifications;
    private final RabbitTemplate rabbitTemplate;
    private final List<NotificationChannel> channels;

    public NotificationService(NotificationRepository notifications, RabbitTemplate rabbitTemplate, List<NotificationChannel> channels) {
        this.notifications = notifications;
        this.rabbitTemplate = rabbitTemplate;
        this.channels = channels;
    }

    public void notify(UserEntity user, String title, String message, String type, UUID resourceId) {
        var notification = new NotificationEntity();
        notification.setUser(user);
        notification.setTitle(title);
        notification.setMessage(message);
        notifications.save(notification);

        var event = new NotificationEvent(user.getId(), title, message, type, resourceId);
        channels.forEach(channel -> channel.send(event));
        rabbitTemplate.convertAndSend("elide.notifications", type, event);
    }
}
