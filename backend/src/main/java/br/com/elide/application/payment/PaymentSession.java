package br.com.elide.application.payment;

import java.math.BigDecimal;
import java.time.Instant;
import java.util.UUID;

public record PaymentSession(UUID orderId, BigDecimal amount, String provider, String code, Instant expiresAt) {
}
