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
@Table(name = "courier_documents")
public class CourierDocumentEntity extends BaseEntity {
    @ManyToOne(optional = false)
    @JoinColumn(name = "courier_id")
    private CourierEntity courier;

    @Column(nullable = false, length = 80)
    private String type;

    @Column(nullable = false, length = 500)
    private String fileUrl;

    @Column(nullable = false, length = 40)
    private String status = "PENDING_REVIEW";

    @Column(length = 500)
    private String rejectionReason;
}
