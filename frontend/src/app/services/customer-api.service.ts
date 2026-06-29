import { HttpClient, HttpParams } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  CustomerAddress,
  CustomerAddressRequest,
  CustomerCardRequest,
  CustomerCashPreference,
  CustomerCoupon,
  CustomerFavorite,
  CustomerNotification,
  CustomerPaymentMethod,
  CustomerPixResponse,
  CustomerProfile,
  CustomerProfileRequest,
  CustomerReview,
  CustomerReviewRequest,
  CustomerSummary,
  CustomerTracking,
  CustomerWallet,
  DeliveryQuoteResponse,
  OrderResponse,
  Page,
  Product,
  Store
} from '../models/marketplace.models';

const API_URL = 'http://localhost:8080/api/v1';
const emptyPage = <T>(): Page<T> => ({ content: [], totalElements: 0, totalPages: 0, number: 0 });

@Injectable({ providedIn: 'root' })
export class CustomerApiService {
  private readonly http = inject(HttpClient);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  profile(): Observable<CustomerProfile> {
    return this.http.get<CustomerProfile>(`${API_URL}/customer/profile`);
  }

  updateProfile(payload: CustomerProfileRequest): Observable<CustomerProfile> {
    return this.http.put<CustomerProfile>(`${API_URL}/customer/profile`, payload);
  }

  summary(): Observable<CustomerSummary> {
    if (!this.isBrowser) {
      return of({ orders: 0, activeCoupons: 0, walletBalance: 0, favorites: 0 });
    }
    return this.http.get<CustomerSummary>(`${API_URL}/customer/summary`);
  }

  addresses(): Observable<CustomerAddress[]> {
    if (!this.isBrowser) {
      return of([]);
    }
    return this.http.get<CustomerAddress[]>(`${API_URL}/customer/addresses`);
  }

  createAddress(payload: CustomerAddressRequest): Observable<CustomerAddress> {
    return this.http.post<CustomerAddress>(`${API_URL}/customer/addresses`, payload);
  }

  updateAddress(addressId: string, payload: CustomerAddressRequest): Observable<CustomerAddress> {
    return this.http.put<CustomerAddress>(`${API_URL}/customer/addresses/${addressId}`, payload);
  }

  deleteAddress(addressId: string): Observable<void> {
    return this.http.delete<void>(`${API_URL}/customer/addresses/${addressId}`);
  }

  favorites(): Observable<CustomerFavorite[]> {
    if (!this.isBrowser) {
      return of([]);
    }
    return this.http.get<CustomerFavorite[]>(`${API_URL}/customer/favorites`);
  }

  addFavorite(storeId: string): Observable<CustomerFavorite> {
    return this.http.post<CustomerFavorite>(`${API_URL}/customer/favorites`, { storeId });
  }

  removeFavorite(storeId: string): Observable<void> {
    return this.http.delete<void>(`${API_URL}/customer/favorites/${storeId}`);
  }

  coupons(): Observable<CustomerCoupon[]> {
    if (!this.isBrowser) {
      return of([]);
    }
    return this.http.get<CustomerCoupon[]>(`${API_URL}/customer/coupons`);
  }

  wallet(): Observable<CustomerWallet> {
    if (!this.isBrowser) {
      return of({ balance: 0, entries: [] });
    }
    return this.http.get<CustomerWallet>(`${API_URL}/customer/wallet`);
  }

  reviews(): Observable<CustomerReview[]> {
    if (!this.isBrowser) {
      return of([]);
    }
    return this.http.get<CustomerReview[]>(`${API_URL}/customer/reviews`);
  }

  createReview(payload: CustomerReviewRequest): Observable<CustomerReview> {
    return this.http.post<CustomerReview>(`${API_URL}/customer/reviews`, payload);
  }

  notifications(): Observable<CustomerNotification[]> {
    if (!this.isBrowser) {
      return of([]);
    }
    return this.http.get<CustomerNotification[]>(`${API_URL}/customer/notifications`);
  }

  markNotificationRead(notificationId: string): Observable<CustomerNotification> {
    return this.http.patch<CustomerNotification>(`${API_URL}/customer/notifications/${notificationId}/read`, {});
  }

  paymentMethods(): Observable<CustomerPaymentMethod[]> {
    if (!this.isBrowser) {
      return of([]);
    }
    return this.http.get<CustomerPaymentMethod[]>(`${API_URL}/customer/payments`);
  }

  saveCard(payload: CustomerCardRequest): Observable<CustomerPaymentMethod> {
    return this.http.post<CustomerPaymentMethod>(`${API_URL}/customer/payments/cards`, payload);
  }

  saveCashPreference(payload: CustomerCashPreference): Observable<CustomerCashPreference> {
    return this.http.put<CustomerCashPreference>(`${API_URL}/customer/payments/cash`, payload);
  }

  generatePix(orderId: string): Observable<CustomerPixResponse> {
    return this.http.post<CustomerPixResponse>(`${API_URL}/customer/payments/pix`, { orderId });
  }

  tracking(orderId?: string): Observable<CustomerTracking> {
    const suffix = orderId ? `/${orderId}` : '/latest';
    return this.http.get<CustomerTracking>(`${API_URL}/customer/tracking${suffix}`);
  }

  stores(filters?: { segment?: string; q?: string; size?: number }): Observable<Page<Store>> {
    if (!this.isBrowser) {
      return of(emptyPage<Store>());
    }
    let params = new HttpParams().set('size', String(filters?.size ?? 12));
    if (filters?.segment) {
      params = params.set('segment', filters.segment);
    }
    if (filters?.q) {
      params = params.set('q', filters.q);
    }
    return this.http.get<Page<Store>>(`${API_URL}/catalog/stores`, { params });
  }

  products(storeId: string): Observable<Page<Product>> {
    if (!this.isBrowser) {
      return of(emptyPage<Product>());
    }
    return this.http.get<Page<Product>>(`${API_URL}/catalog/stores/${storeId}/products?size=20`);
  }

  searchProducts(q?: string): Observable<Page<Product>> {
    if (!this.isBrowser) {
      return of(emptyPage<Product>());
    }
    let params = new HttpParams().set('size', '20');
    if (q) {
      params = params.set('q', q);
    }
    return this.http.get<Page<Product>>(`${API_URL}/catalog/products`, { params });
  }

  createOrder(payload: unknown): Observable<OrderResponse> {
    return this.http.post<OrderResponse>(`${API_URL}/orders`, payload);
  }

  deliveryQuote(payload: { storeId: string; addressId: string; subtotal: number }): Observable<DeliveryQuoteResponse> {
    return this.http.post<DeliveryQuoteResponse>(`${API_URL}/orders/delivery-quote`, payload);
  }

  cancelOrder(orderId: string, reason?: string): Observable<OrderResponse> {
    return this.http.patch<OrderResponse>(`${API_URL}/orders/${orderId}/cancel`, { reason });
  }

  requestRefund(orderId: string, reason?: string): Observable<OrderResponse> {
    return this.http.post<OrderResponse>(`${API_URL}/orders/${orderId}/refund`, { reason });
  }

  myOrders(): Observable<OrderResponse[]> {
    if (!this.isBrowser) {
      return of([]);
    }
    return this.http.get<OrderResponse[]>(`${API_URL}/orders/mine`);
  }
}
