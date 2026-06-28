package br.com.elide.infrastructure.persistence;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "reviews")
public class ReviewEntity extends BaseEntity {
    @ManyToOne(optional = false)
    @JoinColumn(name = "order_id")
    private OrderEntity order;

    @ManyToOne(optional = false)
    @JoinColumn(name = "user_id")
    private UserEntity user;

    @ManyToOne
    @JoinColumn(name = "store_id")
    private StoreEntity store;

    @ManyToOne
    @JoinColumn(name = "courier_id")
    private CourierEntity courier;

    @Column(nullable = false)
    private int rating;

    @Column(length = 800)
    private String comment;
}
