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
@Table(name = "product_addons")
public class ProductAddonEntity extends BaseEntity {
    @ManyToOne(optional = false)
    @JoinColumn(name = "product_id")
    private ProductEntity product;

    @Column(nullable = false, length = 120)
    private String name;

    @Column(nullable = false)
    private BigDecimal price = BigDecimal.ZERO;

    @Column(nullable = false)
    private boolean required = false;

    @Column(nullable = false)
    private int maxQuantity = 1;
}
