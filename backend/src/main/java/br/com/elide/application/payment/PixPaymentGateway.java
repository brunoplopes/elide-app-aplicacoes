package br.com.elide.application.payment;

import br.com.elide.domain.model.Enums.PaymentMethod;
import br.com.elide.infrastructure.persistence.OrderEntity;
import org.springframework.stereotype.Component;

import java.time.Instant;

@Component
public class PixPaymentGateway implements PaymentGateway {
    @Override
    public PaymentMethod method() {
        return PaymentMethod.PIX;
    }

    @Override
    public PaymentSession createSession(OrderEntity order) {
        var code = "000201ELIDE" + order.getId().toString().replace("-", "") + "BR.GOV.BCB.PIX";
        return new PaymentSession(order.getId(), order.getTotal(), "PIX", code, Instant.now().plusSeconds(600));
    }
}
