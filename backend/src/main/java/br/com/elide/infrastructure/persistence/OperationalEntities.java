package br.com.elide.infrastructure.persistence;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;

public final class OperationalEntities {
    private OperationalEntities() {
    }

    @Getter
    @Setter
    @Entity
    @Table(name = "coupons")
    public static class CouponEntity extends BaseEntity {
        @Column(nullable = false, unique = true, length = 40)
        private String code;
        @Column(nullable = false)
        private BigDecimal discountValue;
        @Column(nullable = false)
        private boolean active = true;
    }

    @Getter
    @Setter
    @Entity
    @Table(name = "notifications")
    public static class NotificationEntity extends BaseEntity {
        @ManyToOne(optional = false)
        @JoinColumn(name = "user_id")
        private UserEntity user;
        @Column(nullable = false, length = 120)
        private String title;
        @Column(nullable = false, length = 800)
        private String message;
        @Column(nullable = false)
        private boolean read = false;
    }

    @Getter
    @Setter
    @Entity
    @Table(name = "audit_logs")
    public static class AuditLogEntity extends BaseEntity {
        @ManyToOne
        @JoinColumn(name = "actor_id")
        private UserEntity actor;
        @Column(nullable = false, length = 120)
        private String action;
        @Column(nullable = false, length = 120)
        private String resource;
        @Column(nullable = false, length = 45)
        private String ipAddress;
    }

    @Getter
    @Setter
    @Entity
    @Table(name = "banners")
    public static class BannerEntity extends BaseEntity {
        @Column(nullable = false, length = 120)
        private String title;
        @Column(nullable = false, length = 500)
        private String imageUrl;
        @Column(nullable = false)
        private boolean active = true;
    }

    @Getter
    @Setter
    @Entity
    @Table(name = "fees")
    public static class FeeEntity extends BaseEntity {
        @Column(nullable = false, length = 80)
        private String name;
        @Column(nullable = false)
        private BigDecimal value;
        @Column(nullable = false)
        private boolean percentage;
    }

    @Getter
    @Setter
    @Entity
    @Table(name = "system_settings")
    public static class SystemSettingEntity extends BaseEntity {
        @Column(nullable = false, unique = true, length = 120)
        private String keyName;
        @Column(nullable = false, length = 1200)
        private String value;
    }
}

