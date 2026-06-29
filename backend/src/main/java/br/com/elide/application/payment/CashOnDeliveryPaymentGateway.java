package br.com.elide.application.payment;

import br.com.elide.domain.model.Enums.PaymentMethod;
import br.com.elide.infrastructure.persistence.OrderEntity;
import org.springframework.stereotype.Component;

import java.time.Instant;

@Component
public class CashOnDeliveryPaymentGateway implements PaymentGateway {
    @Override
    public PaymentMethod method() {
        return PaymentMethod.CASH;
    }

    @Override
    public PaymentSession createSession(OrderEntity order) {
        return new PaymentSession(order.getId(), order.getTotal(), "CASH_ON_DELIVERY", "PAGAMENTO_NA_ENTREGA", Instant.now().plusSeconds(86400));
    }
}
