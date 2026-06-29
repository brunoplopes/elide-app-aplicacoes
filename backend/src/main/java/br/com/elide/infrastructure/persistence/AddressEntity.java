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
@Table(name = "addresses")
public class AddressEntity extends BaseEntity {
    @Column(nullable = false, length = 80)
    private String label = "Endereco";

    @ManyToOne(optional = false)
    @JoinColumn(name = "user_id")
    private UserEntity user;

    @ManyToOne
    @JoinColumn(name = "city_id")
    private CityEntity city;

    @Column(nullable = false, length = 120)
    private String street;

    @Column(nullable = false, length = 30)
    private String number;

    @Column(nullable = false, length = 80)
    private String district;

    @Column(nullable = false, length = 10)
    private String zipCode;

    private BigDecimal latitude;
    private BigDecimal longitude;
}
