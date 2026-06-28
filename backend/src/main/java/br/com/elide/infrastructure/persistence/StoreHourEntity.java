package br.com.elide.infrastructure.persistence;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalTime;

@Getter
@Setter
@Entity
@Table(name = "store_hours")
public class StoreHourEntity extends BaseEntity {
    @ManyToOne(optional = false)
    @JoinColumn(name = "store_id")
    private StoreEntity store;

    @Column(nullable = false)
    private int dayOfWeek;

    @Column(nullable = false)
    private LocalTime opensAt;

    @Column(nullable = false)
    private LocalTime closesAt;

    @Column(nullable = false)
    private boolean active = true;
}
