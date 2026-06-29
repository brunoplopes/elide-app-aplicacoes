package br.com.elide.application.payment;

import br.com.elide.domain.model.Enums.PaymentMethod;
import org.springframework.stereotype.Component;

import java.util.EnumMap;
import java.util.List;
import java.util.Map;

@Component
public class PaymentGatewayRegistry {
    private final Map<PaymentMethod, PaymentGateway> gateways = new EnumMap<>(PaymentMethod.class);

    public PaymentGatewayRegistry(List<PaymentGateway> gateways) {
        gateways.forEach(gateway -> this.gateways.put(gateway.method(), gateway));
    }

    public PaymentGateway gateway(PaymentMethod method) {
        var gateway = gateways.get(method);
        if (gateway == null) {
            throw new IllegalArgumentException("Payment gateway not configured for " + method);
        }
        return gateway;
    }
}
