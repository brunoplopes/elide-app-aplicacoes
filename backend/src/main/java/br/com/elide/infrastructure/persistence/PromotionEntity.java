package br.com.elide.infrastructure.persistence;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

import java.time.Instant;

@Getter
@Setter
@Entity
@Table(name = "promotions")
public class PromotionEntity extends BaseEntity {
    @ManyToOne(optional = false)
    @JoinColumn(name = "store_id")
    private StoreEntity store;

    @Column(nullable = false, length = 120)
    private String name;

    @Column(nullable = false)
    private Instant startsAt;

    @Column(nullable = false)
    private Instant endsAt;

    @Column(nullable = false)
    private boolean active = true;
}
