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
@Table(name = "customer_wallet_entries")
public class CustomerWalletEntryEntity extends BaseEntity {
    @ManyToOne(optional = false)
    @JoinColumn(name = "user_id")
    private UserEntity user;

    @Column(nullable = false, length = 80)
    private String icon;

    @Column(nullable = false, length = 160)
    private String title;

    @Column(nullable = false)
    private BigDecimal amount = BigDecimal.ZERO;
}
