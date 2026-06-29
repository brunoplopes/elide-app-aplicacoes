package br.com.elide.application.notification;

import java.util.UUID;

public record NotificationEvent(UUID userId, String title, String message, String type, UUID resourceId) {
}
