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
@Table(name = "store_documents")
public class StoreDocumentEntity extends BaseEntity {
    @ManyToOne(optional = false)
    @JoinColumn(name = "store_id")
    private StoreEntity store;

    @Column(nullable = false, length = 80)
    private String type;

    @Column(nullable = false, length = 500)
    private String fileUrl;

    @Column(nullable = false, length = 40)
    private String status = "PENDING_REVIEW";

    @Column(length = 500)
    private String rejectionReason;
}
