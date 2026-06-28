package br.com.elide.infrastructure.persistence;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;

@Getter
@Setter
@Entity
@Table(name = "financial_entries")
public class FinancialEntryEntity extends BaseEntity {
    @ManyToOne
    @JoinColumn(name = "store_id")
    private StoreEntity store;

    @ManyToOne
    @JoinColumn(name = "courier_id")
    private CourierEntity courier;

    @ManyToOne
    @JoinColumn(name = "order_id")
    private OrderEntity order;

    @Column(nullable = false, length = 60)
    private String type;

    @Column(nullable = false)
    private BigDecimal amount = BigDecimal.ZERO;
}
