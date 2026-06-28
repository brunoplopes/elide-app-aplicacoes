export type RoleName = 'MASTER_ADMIN' | 'ADMIN' | 'CUSTOMER' | 'STORE_OWNER' | 'COURIER';

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

