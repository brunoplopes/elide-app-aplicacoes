package br.com.elide.infrastructure.persistence;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;

@Getter
@Setter
@Entity
@Table(name = "customers")
public class CustomerEntity extends BaseEntity {
    @OneToOne(optional = false)
    @JoinColumn(name = "user_id")
    private UserEntity user;

    @Column(length = 14)
    private String cpf;

    @Column(length = 20)
    private String phone;

    @Column(nullable = false)
    private BigDecimal walletBalance = BigDecimal.ZERO;
}
