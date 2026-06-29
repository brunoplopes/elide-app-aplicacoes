package br.com.elide.infrastructure.persistence;

import br.com.elide.domain.model.Enums.PaymentMethod;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "customer_payment_methods")
public class CustomerPaymentMethodEntity extends BaseEntity {
    @ManyToOne(optional = false)
    @JoinColumn(name = "user_id")
    private UserEntity user;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 40)
    private PaymentMethod type;

    @Column(nullable = false, length = 120)
    private String label;

    @Column(length = 4)
    private String last4;

    @Column(nullable = false)
    private boolean defaultMethod = false;
}
