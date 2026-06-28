package br.com.elide.infrastructure.persistence;

import br.com.elide.domain.model.Enums.StoreStatus;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;

@Getter
@Setter
@Entity
@Table(name = "stores")
public class StoreEntity extends BaseEntity {
    @Column(nullable = false, length = 160)
    private String name;

    @Column(nullable = false, unique = true, length = 18)
    private String document;

    @Column(nullable = false, length = 80)
    private String segment;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 40)
    private StoreStatus status = StoreStatus.PENDING_APPROVAL;

    @Column(nullable = false)
    private BigDecimal deliveryFee = BigDecimal.ZERO;

    @Column(nullable = false)
    private BigDecimal minimumOrder = BigDecimal.ZERO;

    @Column(nullable = false)
    private boolean open = true;

    @ManyToOne
    @JoinColumn(name = "city_id")
    private CityEntity city;

    @ManyToOne
    @JoinColumn(name = "owner_id")
    private UserEntity owner;
}

