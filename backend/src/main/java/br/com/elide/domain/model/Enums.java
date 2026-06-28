package br.com.elide.domain.model;

public final class Enums {
    private Enums() {
    }

    public enum RoleName {
        MASTER_ADMIN, ADMIN, CUSTOMER, STORE_OWNER, COURIER
    }

    public enum StoreStatus {
        PENDING_DOCUMENTS, PENDING_APPROVAL, APPROVED, SUSPENDED, REJECTED
    }

    public enum CourierStatus {
        PENDING_DOCUMENTS, PENDING_APPROVAL, AVAILABLE, UNAVAILABLE, SUSPENDED, REJECTED
    }

    public enum OrderStatus {
        CREATED, ACCEPTED, PREPARING, READY_FOR_PICKUP, OUT_FOR_DELIVERY, DELIVERED, CANCELLED, REFUND_REQUESTED, REFUNDED
    }

    public enum PaymentMethod {
        PIX, CREDIT_CARD, DEBIT_CARD, CASH, MERCADO_PAGO, PAGSEGURO, STRIPE
    }

    public enum PaymentStatus {
        PENDING, AUTHORIZED, PAID, FAILED, REFUNDED
    }

    public enum NotificationChannel {
        WEBSOCKET, FCM, EMAIL, SMS, WHATSAPP
    }
}

