package br.com.elide.infrastructure.persistence;

import br.com.elide.domain.model.Enums.CourierStatus;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "couriers")
public class CourierEntity extends BaseEntity {
    @OneToOne(optional = false)
    @JoinColumn(name = "user_id")
    private UserEntity user;

    @Column(nullable = false, length = 14)
    private String document;

    @Column(nullable = false, length = 40)
    private String vehicleType;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 40)
    private CourierStatus status = CourierStatus.PENDING_APPROVAL;
}

