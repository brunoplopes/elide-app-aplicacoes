export type RoleName = 'MASTER_ADMIN' | 'ADMIN' | 'CUSTOMER' | 'STORE_OWNER' | 'STORE_USER' | 'COURIER';

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  username: string;
  fullName: string;
  mustChangePassword: boolean;
  roles: RoleName[];
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export interface Store {
  id: string;
  name: string;
  segment: string;
  deliveryFee: number;
  minimumOrder: number;
  open: boolean;
}

export interface Product {
  id: string;
  storeId?: string;
  name: string;
  description: string;
  price: number;
  stockQuantity: number;
}

export interface Dashboard {
  revenue: number;
  totalOrders: number;
  totalUsers: number;
  activeStores: number;
  activeCouriers: number;
  ordersByStatus: Array<{ label: string; value: number }>;
}

export interface Page<T> {
  content: T[];
  totalElements: number;
  totalPages: number;
  number: number;
}

export type StoreStatus = 'PENDING_DOCUMENTS' | 'PENDING_APPROVAL' | 'APPROVED' | 'SUSPENDED' | 'REJECTED';
export type OrderStatus = 'CREATED' | 'ACCEPTED' | 'PREPARING' | 'READY_FOR_PICKUP' | 'OUT_FOR_DELIVERY' | 'DELIVERED' | 'CANCELLED' | 'REFUND_REQUESTED' | 'REFUNDED';

export interface StoreProfileRequest {
  name: string;
  document: string;
  segment: string;
  cityId?: string | null;
  deliveryFee: number;
  minimumOrder: number;
  open: boolean;
}

export interface StoreProfileResponse extends StoreProfileRequest {
  id: string;
  status: StoreStatus;
}

export interface StoreDocumentRequest {
  type: string;
  fileUrl: string;
}

export interface StoreDocumentResponse extends StoreDocumentRequest {
  id: string;
  status: string;
  rejectionReason?: string | null;
  createdAt: string;
}

export interface StoreApprovalRequest {
  status: StoreStatus;
  reason?: string | null;
}

export interface StoreCategoryRequest {
  name: string;
  icon: string;
  active: boolean;
}

export interface StoreCategoryResponse extends StoreCategoryRequest {
  id: string;
}

export interface StoreProductRequest {
  categoryId: string;
  name: string;
  description: string;
  price: number;
  stockQuantity: number;
  active: boolean;
}

export interface StoreProductResponse extends StoreProductRequest {
  id: string;
}

export interface StoreStockRequest {
  stockQuantity: number;
  active: boolean;
}

export interface StoreAddonRequest {
  name: string;
  price: number;
  required: boolean;
  maxQuantity: number;
}

export interface StoreAddonResponse extends StoreAddonRequest {
  id: string;
  productId: string;
}

export interface StoreHourRequest {
  dayOfWeek: number;
  opensAt: string;
  closesAt: string;
  active: boolean;
}

export interface StoreHourResponse extends StoreHourRequest {
  id: string;
}

export interface StorePromotionRequest {
  name: string;
  startsAt: string;
  endsAt: string;
  active: boolean;
}

export interface StorePromotionResponse extends StorePromotionRequest {
  id: string;
}

export interface StoreOrderResponse {
  id: string;
  customerName: string;
  status: OrderStatus;
  paymentMethod: string;
  subtotal: number;
  deliveryFee: number;
  discount: number;
  total: number;
  createdAt: string;
}

export interface StoreFinancialSummaryResponse {
  revenue: number;
  pendingSettlement: number;
  averageTicket: number;
  deliveredOrders: number;
}

export interface StoreFinancialEntryResponse {
  id: string;
  orderId?: string | null;
  type: string;
  amount: number;
  createdAt: string;
}

export interface StoreReviewResponse {
  id: string;
  orderId: string;
  customerName: string;
  rating: number;
  comment?: string | null;
  createdAt: string;
}

export interface StoreDashboardResponse {
  ordersToday: number;
  revenueToday: number;
  averageTicket: number;
  activeProducts: number;
  lowStockProducts: number;
  averageRating: number;
  ordersByStatus: Record<OrderStatus, number>;
  topProducts: StoreProductResponse[];
}

export interface StoreReportResponse {
  revenue: number;
  orders: number;
  averageTicket: number;
  ordersByStatus: Record<OrderStatus, number>;
}

export interface OrderResponse {
  id: string;
  status: OrderStatus;
  subtotal: number;
  deliveryFee: number;
  discount: number;
  total: number;
}

export interface CustomerProfile {
  fullName: string;
  email: string;
  phone?: string | null;
  cpf?: string | null;
  walletBalance: number;
}

export interface CustomerProfileRequest {
  fullName: string;
  email: string;
  phone?: string | null;
  cpf?: string | null;
}

export interface CustomerAddressRequest {
  label: string;
  street: string;
  number: string;
  district: string;
  zipCode: string;
  cityId?: string | null;
  latitude?: number | null;
  longitude?: number | null;
}

export interface CustomerAddress extends CustomerAddressRequest {
  id: string;
}

export interface CustomerFavorite {
  id: string;
  storeId: string;
  storeName: string;
  segment: string;
  deliveryFee: number;
  eta?: string;
  open: boolean;
}

export interface CustomerCoupon {
  id: string;
  code: string;
  discountValue: number;
  active: boolean;
  description?: string;
}

export interface CustomerWallet {
  balance: number;
  entries: CustomerWalletEntry[];
}

export interface CustomerWalletEntry {
  id: string;
  icon: string;
  title: string;
  amount: number;
  createdAt: string;
}

export interface CustomerNotification {
  id: string;
  title: string;
  message: string;
  read: boolean;
  createdAt: string;
}

export interface CustomerReviewRequest {
  orderId: string;
  rating: number;
  comment: string;
}

export interface CustomerReview {
  id: string;
  orderId: string;
  storeName: string;
  rating: number;
  comment?: string | null;
  createdAt: string;
}

export interface CustomerPaymentMethod {
  id: string;
  type: 'PIX' | 'CREDIT_CARD' | 'DEBIT_CARD' | 'CASH';
  label: string;
  last4?: string;
  defaultMethod: boolean;
}

export interface CustomerCardRequest {
  cardNumber: string;
  holderName: string;
  expiry: string;
  cvv: string;
  defaultMethod?: boolean;
}

export interface CustomerCashPreference {
  cashAmount: number;
  noChange: boolean;
}

export interface CustomerPixResponse {
  orderId: string;
  total: number;
  pixCode: string;
  expiresAt: string;
}

export interface CustomerTracking {
  orderId: string;
  status: OrderStatus;
  etaMinutes: number;
  distanceMeters: number;
  steps: Array<{ label: string; done: boolean }>;
}

export interface CustomerSummary {
  orders: number;
  activeCoupons: number;
  walletBalance: number;
  favorites: number;
}

export type CourierStatus = 'PENDING_DOCUMENTS' | 'PENDING_APPROVAL' | 'AVAILABLE' | 'UNAVAILABLE' | 'SUSPENDED' | 'REJECTED';

export interface CourierSignupRequest {
  document: string;
  vehicleType: string;
}

export interface CourierProfileResponse extends CourierSignupRequest {
  id: string;
  fullName: string;
  email: string;
  status: CourierStatus;
  available: boolean;
}

export interface CourierDocumentRequest {
  type: string;
  fileUrl: string;
}

export interface CourierDocumentResponse extends CourierDocumentRequest {
  id: string;
  status: string;
  rejectionReason?: string | null;
  createdAt: string;
}

export interface CourierApprovalRequest {
  status: CourierStatus;
  reason?: string | null;
}

export interface CourierAvailabilityRequest {
  available: boolean;
}

export interface CourierLocationRequest {
  latitude: number;
  longitude: number;
  heading?: number | null;
  speed?: number | null;
}

export interface CourierLocationResponse extends CourierLocationRequest {
  id: string;
  createdAt: string;
}

export interface CourierDeliveryResponse {
  id: string;
  storeName: string;
  customerName: string;
  status: OrderStatus;
  deliveryFee: number;
  total: number;
  etaMinutes: number;
  distanceMeters: number;
  createdAt: string;
}

export interface CourierDeclineRequest {
  reason?: string | null;
}

export interface CourierFinancialEntryResponse {
  id: string;
  orderId?: string | null;
  type: string;
  amount: number;
  createdAt: string;
}

export interface CourierEarningsResponse {
  daily: number;
  monthly: number;
  statement: CourierFinancialEntryResponse[];
}

export interface CourierMapResponse {
  location?: CourierLocationResponse | null;
  activeDelivery?: CourierDeliveryResponse | null;
  encodedPolyline?: string | null;
}

export interface CourierDashboardResponse {
  profile: CourierProfileResponse;
  dailyEarnings: number;
  monthlyEarnings: number;
  deliveriesToday: number;
  completedDeliveries: number;
  availableRides: number;
  activeDelivery?: CourierDeliveryResponse | null;
}

export interface AdminStoreRequest {
  name: string;
  document: string;
  segment: string;
  status: StoreStatus;
  cityId?: string | null;
  ownerId?: string | null;
  deliveryFee: number;
  minimumOrder: number;
  open: boolean;
}

export interface AdminStoreResponse extends AdminStoreRequest {
  id: string;
  cityName?: string | null;
  ownerUsername?: string | null;
}

export interface AdminCategoryRequest {
  name: string;
  icon: string;
  active: boolean;
}

export interface AdminCategoryResponse extends AdminCategoryRequest {
  id: string;
}

export interface AdminBannerRequest {
  title: string;
  imageUrl: string;
  active: boolean;
}

export interface AdminBannerResponse extends AdminBannerRequest {
  id: string;
}

export interface AdminCityRequest {
  name: string;
  state: string;
  active: boolean;
}

export interface AdminCityResponse extends AdminCityRequest {
  id: string;
}

export interface AdminCouponRequest {
  code: string;
  discountValue: number;
  active: boolean;
}

export interface AdminCouponResponse extends AdminCouponRequest {
  id: string;
}

export interface AdminFeeRequest {
  name: string;
  value: number;
  percentage: boolean;
}

export interface AdminFeeResponse extends AdminFeeRequest {
  id: string;
}

export interface AdminSettingRequest {
  keyName: string;
  value: string;
}

export interface AdminSettingResponse extends AdminSettingRequest {
  id: string;
}

export interface AdminUserRequest {
  username: string;
  email: string;
  password: string;
  fullName: string;
  role: RoleName;
  enabled: boolean;
}

export interface AdminUserUpdateRequest {
  email: string;
  fullName: string;
  enabled: boolean;
  mustChangePassword: boolean;
}

export interface AdminApprovalRequest {
  status: string;
  reason?: string | null;
}

export interface AdminUserResponse {
  id: string;
  username: string;
  email: string;
  fullName: string;
  enabled: boolean;
  mustChangePassword: boolean;
  roles: RoleName[];
}

export interface AdminCourierResponse {
  id: string;
  fullName: string;
  email: string;
  document: string;
  vehicleType: string;
  status: CourierStatus;
}

export interface AdminOrderResponse {
  id: string;
  customerName: string;
  storeName: string;
  courierName?: string | null;
  status: OrderStatus;
  paymentMethod: string;
  subtotal: number;
  deliveryFee: number;
  discount: number;
  total: number;
  createdAt: string;
}

export interface AdminFinancialSummaryResponse {
  revenue: number;
  courierPayout: number;
  platformBalance: number;
  entries: number;
}

export interface AdminFinancialEntryResponse {
  id: string;
  orderId?: string | null;
  storeName?: string | null;
  courierName?: string | null;
  type: string;
  amount: number;
  createdAt: string;
}

export interface AdminAuditResponse {
  id: string;
  actorUsername: string;
  action: string;
  resource: string;
  ipAddress: string;
  createdAt: string;
}
