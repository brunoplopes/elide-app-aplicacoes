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
@Table(name = "order_item_addons")
public class OrderItemAddonEntity extends BaseEntity {
    @ManyToOne(optional = false)
    @JoinColumn(name = "order_item_id")
    private OrderItemEntity orderItem;

    @ManyToOne(optional = false)
    @JoinColumn(name = "product_addon_id")
    private ProductAddonEntity productAddon;

    @Column(nullable = false, length = 120)
    private String name;

    @Column(nullable = false)
    private int quantity;

    @Column(nullable = false)
    private BigDecimal unitPrice = BigDecimal.ZERO;

    @Column(nullable = false)
    private BigDecimal total = BigDecimal.ZERO;
}
