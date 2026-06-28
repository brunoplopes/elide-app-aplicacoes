import { HttpClient, HttpParams } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  OrderStatus,
  Page,
  StoreAddonRequest,
  StoreAddonResponse,
  StoreApprovalRequest,
  StoreCategoryRequest,
  StoreCategoryResponse,
  StoreDashboardResponse,
  StoreDocumentRequest,
  StoreDocumentResponse,
  StoreFinancialEntryResponse,
  StoreFinancialSummaryResponse,
  StoreHourRequest,
  StoreHourResponse,
  StoreOrderResponse,
  StoreProductRequest,
  StoreProductResponse,
  StoreProfileRequest,
  StoreProfileResponse,
  StorePromotionRequest,
  StorePromotionResponse,
  StoreReportResponse,
  StoreReviewResponse,
  StoreStockRequest
} from '../models/marketplace.models';

const API_URL = 'http://localhost:8080/api/v1/store';
const emptyPage = <T>(): Page<T> => ({ content: [], totalElements: 0, totalPages: 0, number: 0 });

const emptyDashboard: StoreDashboardResponse = {
  ordersToday: 0,
  revenueToday: 0,
  averageTicket: 0,
  activeProducts: 0,
  lowStockProducts: 0,
  averageRating: 0,
  ordersByStatus: {
    CREATED: 0,
    ACCEPTED: 0,
    PREPARING: 0,
    READY_FOR_PICKUP: 0,
    OUT_FOR_DELIVERY: 0,
    DELIVERED: 0,
    CANCELLED: 0,
    REFUND_REQUESTED: 0,
    REFUNDED: 0
  },
  topProducts: []
};

const emptyFinancialSummary: StoreFinancialSummaryResponse = {
  revenue: 0,
  pendingSettlement: 0,
  averageTicket: 0,
  deliveredOrders: 0
};

@Injectable({ providedIn: 'root' })
export class StoreApiService {
  private readonly http = inject(HttpClient);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  signup(payload: StoreProfileRequest): Observable<StoreProfileResponse> {
    return this.http.post<StoreProfileResponse>(`${API_URL}/signup`, payload);
  }

  profile(): Observable<StoreProfileResponse | null> {
    if (!this.isBrowser) {
      return of(null);
    }
    return this.http.get<StoreProfileResponse>(`${API_URL}/profile`);
  }

  updateProfile(payload: StoreProfileRequest): Observable<StoreProfileResponse> {
    return this.http.put<StoreProfileResponse>(`${API_URL}/profile`, payload);
  }

  sendDocument(payload: StoreDocumentRequest): Observable<StoreDocumentResponse> {
    return this.http.post<StoreDocumentResponse>(`${API_URL}/documents`, payload);
  }

  documents(): Observable<StoreDocumentResponse[]> {
    if (!this.isBrowser) {
      return of([]);
    }
    return this.http.get<StoreDocumentResponse[]>(`${API_URL}/documents`);
  }

  approveStore(storeId: string, payload: StoreApprovalRequest): Observable<StoreProfileResponse> {
    return this.http.patch<StoreProfileResponse>(`${API_URL}/admin/stores/${storeId}/approval`, payload);
  }

  categories(): Observable<StoreCategoryResponse[]> {
    if (!this.isBrowser) {
      return of([]);
    }
    return this.http.get<StoreCategoryResponse[]>(`${API_URL}/categories`);
  }

  createCategory(payload: StoreCategoryRequest): Observable<StoreCategoryResponse> {
    return this.http.post<StoreCategoryResponse>(`${API_URL}/categories`, payload);
  }

  products(size = 20): Observable<Page<StoreProductResponse>> {
    if (!this.isBrowser) {
      return of(emptyPage<StoreProductResponse>());
    }
    return this.http.get<Page<StoreProductResponse>>(`${API_URL}/products`, { params: { size } });
  }

  createProduct(payload: StoreProductRequest): Observable<StoreProductResponse> {
    return this.http.post<StoreProductResponse>(`${API_URL}/products`, payload);
  }

  updateProduct(productId: string, payload: StoreProductRequest): Observable<StoreProductResponse> {
    return this.http.put<StoreProductResponse>(`${API_URL}/products/${productId}`, payload);
  }

  updateStock(productId: string, payload: StoreStockRequest): Observable<StoreProductResponse> {
    return this.http.patch<StoreProductResponse>(`${API_URL}/products/${productId}/stock`, payload);
  }

  deleteProduct(productId: string): Observable<void> {
    return this.http.delete<void>(`${API_URL}/products/${productId}`);
  }

  addons(productId: string): Observable<StoreAddonResponse[]> {
    if (!this.isBrowser) {
      return of([]);
    }
    return this.http.get<StoreAddonResponse[]>(`${API_URL}/products/${productId}/addons`);
  }

  createAddon(productId: string, payload: StoreAddonRequest): Observable<StoreAddonResponse> {
    return this.http.post<StoreAddonResponse>(`${API_URL}/products/${productId}/addons`, payload);
  }

  updateAddon(productId: string, addonId: string, payload: StoreAddonRequest): Observable<StoreAddonResponse> {
    return this.http.put<StoreAddonResponse>(`${API_URL}/products/${productId}/addons/${addonId}`, payload);
  }

  deleteAddon(productId: string, addonId: string): Observable<void> {
    return this.http.delete<void>(`${API_URL}/products/${productId}/addons/${addonId}`);
  }

  hours(): Observable<StoreHourResponse[]> {
    if (!this.isBrowser) {
      return of([]);
    }
    return this.http.get<StoreHourResponse[]>(`${API_URL}/hours`);
  }

  upsertHour(payload: StoreHourRequest): Observable<StoreHourResponse> {
    return this.http.put<StoreHourResponse>(`${API_URL}/hours`, payload);
  }

  promotions(): Observable<StorePromotionResponse[]> {
    if (!this.isBrowser) {
      return of([]);
    }
    return this.http.get<StorePromotionResponse[]>(`${API_URL}/promotions`);
  }

  createPromotion(payload: StorePromotionRequest): Observable<StorePromotionResponse> {
    return this.http.post<StorePromotionResponse>(`${API_URL}/promotions`, payload);
  }

  updatePromotion(promotionId: string, payload: StorePromotionRequest): Observable<StorePromotionResponse> {
    return this.http.put<StorePromotionResponse>(`${API_URL}/promotions/${promotionId}`, payload);
  }

  deletePromotion(promotionId: string): Observable<void> {
    return this.http.delete<void>(`${API_URL}/promotions/${promotionId}`);
  }

  orders(status?: OrderStatus): Observable<StoreOrderResponse[]> {
    if (!this.isBrowser) {
      return of([]);
    }
    const params = status ? new HttpParams().set('status', status) : undefined;
    return this.http.get<StoreOrderResponse[]>(`${API_URL}/orders`, { params });
  }

  updateOrderStatus(orderId: string, status: OrderStatus): Observable<StoreOrderResponse> {
    return this.http.patch<StoreOrderResponse>(`${API_URL}/orders/${orderId}/status`, { status });
  }

  financialSummary(): Observable<StoreFinancialSummaryResponse> {
    if (!this.isBrowser) {
      return of(emptyFinancialSummary);
    }
    return this.http.get<StoreFinancialSummaryResponse>(`${API_URL}/financial/summary`);
  }

  financialEntries(): Observable<StoreFinancialEntryResponse[]> {
    if (!this.isBrowser) {
      return of([]);
    }
    return this.http.get<StoreFinancialEntryResponse[]>(`${API_URL}/financial/entries`);
  }

  reports(from?: string, to?: string): Observable<StoreReportResponse> {
    if (!this.isBrowser) {
      return of({ revenue: 0, orders: 0, averageTicket: 0, ordersByStatus: emptyDashboard.ordersByStatus });
    }
    let params = new HttpParams();
    if (from) {
      params = params.set('from', from);
    }
    if (to) {
      params = params.set('to', to);
    }
    return this.http.get<StoreReportResponse>(`${API_URL}/reports`, { params });
  }

  dashboard(): Observable<StoreDashboardResponse> {
    if (!this.isBrowser) {
      return of(emptyDashboard);
    }
    return this.http.get<StoreDashboardResponse>(`${API_URL}/dashboard`);
  }

  reviews(): Observable<StoreReviewResponse[]> {
    if (!this.isBrowser) {
      return of([]);
    }
    return this.http.get<StoreReviewResponse[]>(`${API_URL}/reviews`);
  }
}
