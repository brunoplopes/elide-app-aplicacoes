package br.com.elide.infrastructure.persistence;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "routes")
public class RouteEntity extends BaseEntity {
    @OneToOne(optional = false)
    @JoinColumn(name = "order_id")
    private OrderEntity order;

    @Column(nullable = false, length = 40)
    private String provider;

    @Column(nullable = false)
    private int distanceMeters;

    @Column(nullable = false)
    private int estimatedSeconds;

    @Column(columnDefinition = "text")
    private String encodedPolyline;
}
