package br.com.elide.infrastructure.persistence;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "courier_delivery_decisions")
public class CourierDeliveryDecisionEntity extends BaseEntity {
    @ManyToOne(optional = false)
    @JoinColumn(name = "courier_id")
    private CourierEntity courier;

    @ManyToOne(optional = false)
    @JoinColumn(name = "order_id")
    private OrderEntity order;

    @Column(nullable = false)
    private boolean accepted;

    @Column(length = 300)
    private String reason;
}
