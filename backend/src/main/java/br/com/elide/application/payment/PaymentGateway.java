package br.com.elide.application.payment;

import br.com.elide.domain.model.Enums.PaymentMethod;
import br.com.elide.infrastructure.persistence.OrderEntity;

public interface PaymentGateway {
    PaymentMethod method();

    PaymentSession createSession(OrderEntity order);
}
