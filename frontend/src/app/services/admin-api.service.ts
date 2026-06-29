import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  AdminApprovalRequest,
  AdminAuditResponse,
  AdminBannerRequest,
  AdminBannerResponse,
  AdminCategoryRequest,
  AdminCategoryResponse,
  AdminCityRequest,
  AdminCityResponse,
  AdminCouponRequest,
  AdminCouponResponse,
  AdminCourierResponse,
  AdminFeeRequest,
  AdminFeeResponse,
  AdminFinancialEntryResponse,
  AdminFinancialSummaryResponse,
  AdminOrderResponse,
  AdminSettingRequest,
  AdminSettingResponse,
  AdminStoreRequest,
  AdminStoreResponse,
  AdminUserRequest,
  AdminUserResponse,
  AdminUserUpdateRequest,
  Dashboard
} from '../models/marketplace.models';

const API_URL = 'http://localhost:8080/api/v1/admin';

@Injectable({ providedIn: 'root' })
export class AdminApiService {
  private readonly http = inject(HttpClient);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  dashboard(): Observable<Dashboard> {
    return this.http.get<Dashboard>(`${API_URL}/dashboard`);
  }

  stores(): Observable<AdminStoreResponse[]> {
    return this.getList<AdminStoreResponse>('stores');
  }

  createStore(payload: AdminStoreRequest): Observable<AdminStoreResponse> {
    return this.http.post<AdminStoreResponse>(`${API_URL}/stores`, payload);
  }

  updateStore(id: string, payload: AdminStoreRequest): Observable<AdminStoreResponse> {
    return this.http.put<AdminStoreResponse>(`${API_URL}/stores/${id}`, payload);
  }

  deleteStore(id: string): Observable<void> {
    return this.http.delete<void>(`${API_URL}/stores/${id}`);
  }

  approveStore(id: string, payload: AdminApprovalRequest): Observable<AdminStoreResponse> {
    return this.http.patch<AdminStoreResponse>(`${API_URL}/stores/${id}/approval`, payload);
  }

  couriers(): Observable<AdminCourierResponse[]> {
    return this.getList<AdminCourierResponse>('couriers');
  }

  approveCourier(id: string, payload: AdminApprovalRequest): Observable<AdminCourierResponse> {
    return this.http.patch<AdminCourierResponse>(`${API_URL}/couriers/${id}/approval`, payload);
  }

  categories(): Observable<AdminCategoryResponse[]> {
    return this.getList<AdminCategoryResponse>('categories');
  }

  createCategory(payload: AdminCategoryRequest): Observable<AdminCategoryResponse> {
    return this.http.post<AdminCategoryResponse>(`${API_URL}/categories`, payload);
  }

  updateCategory(id: string, payload: AdminCategoryRequest): Observable<AdminCategoryResponse> {
    return this.http.put<AdminCategoryResponse>(`${API_URL}/categories/${id}`, payload);
  }

  deleteCategory(id: string): Observable<void> {
    return this.http.delete<void>(`${API_URL}/categories/${id}`);
  }

  banners(): Observable<AdminBannerResponse[]> {
    return this.getList<AdminBannerResponse>('banners');
  }

  createBanner(payload: AdminBannerRequest): Observable<AdminBannerResponse> {
    return this.http.post<AdminBannerResponse>(`${API_URL}/banners`, payload);
  }

  updateBanner(id: string, payload: AdminBannerRequest): Observable<AdminBannerResponse> {
    return this.http.put<AdminBannerResponse>(`${API_URL}/banners/${id}`, payload);
  }

  deleteBanner(id: string): Observable<void> {
    return this.http.delete<void>(`${API_URL}/banners/${id}`);
  }

  cities(): Observable<AdminCityResponse[]> {
    return this.getList<AdminCityResponse>('cities');
  }

  createCity(payload: AdminCityRequest): Observable<AdminCityResponse> {
    return this.http.post<AdminCityResponse>(`${API_URL}/cities`, payload);
  }

  updateCity(id: string, payload: AdminCityRequest): Observable<AdminCityResponse> {
    return this.http.put<AdminCityResponse>(`${API_URL}/cities/${id}`, payload);
  }

  deleteCity(id: string): Observable<void> {
    return this.http.delete<void>(`${API_URL}/cities/${id}`);
  }

  coupons(): Observable<AdminCouponResponse[]> {
    return this.getList<AdminCouponResponse>('coupons');
  }

  createCoupon(payload: AdminCouponRequest): Observable<AdminCouponResponse> {
    return this.http.post<AdminCouponResponse>(`${API_URL}/coupons`, payload);
  }

  updateCoupon(id: string, payload: AdminCouponRequest): Observable<AdminCouponResponse> {
    return this.http.put<AdminCouponResponse>(`${API_URL}/coupons/${id}`, payload);
  }

  deleteCoupon(id: string): Observable<void> {
    return this.http.delete<void>(`${API_URL}/coupons/${id}`);
  }

  fees(): Observable<AdminFeeResponse[]> {
    return this.getList<AdminFeeResponse>('fees');
  }

  createFee(payload: AdminFeeRequest): Observable<AdminFeeResponse> {
    return this.http.post<AdminFeeResponse>(`${API_URL}/fees`, payload);
  }

  updateFee(id: string, payload: AdminFeeRequest): Observable<AdminFeeResponse> {
    return this.http.put<AdminFeeResponse>(`${API_URL}/fees/${id}`, payload);
  }

  deleteFee(id: string): Observable<void> {
    return this.http.delete<void>(`${API_URL}/fees/${id}`);
  }

  admins(): Observable<AdminUserResponse[]> {
    return this.getList<AdminUserResponse>('admins');
  }

  createAdmin(payload: AdminUserRequest): Observable<AdminUserResponse> {
    return this.http.post<AdminUserResponse>(`${API_URL}/admins`, payload);
  }

  updateAdmin(id: string, payload: AdminUserUpdateRequest): Observable<AdminUserResponse> {
    return this.http.put<AdminUserResponse>(`${API_URL}/admins/${id}`, payload);
  }

  approveAdmin(id: string, payload: AdminApprovalRequest): Observable<AdminUserResponse> {
    return this.http.patch<AdminUserResponse>(`${API_URL}/admins/${id}/approval`, payload);
  }

  deleteAdmin(id: string): Observable<void> {
    return this.http.delete<void>(`${API_URL}/admins/${id}`);
  }

  orders(): Observable<AdminOrderResponse[]> {
    return this.getList<AdminOrderResponse>('orders');
  }

  financialSummary(): Observable<AdminFinancialSummaryResponse> {
    if (!this.isBrowser) {
      return of({ revenue: 0, courierPayout: 0, platformBalance: 0, entries: 0 });
    }
    return this.http.get<AdminFinancialSummaryResponse>(`${API_URL}/financial/summary`);
  }

  financialEntries(): Observable<AdminFinancialEntryResponse[]> {
    return this.getList<AdminFinancialEntryResponse>('financial/entries');
  }

  settings(): Observable<AdminSettingResponse[]> {
    return this.getList<AdminSettingResponse>('settings');
  }

  upsertSetting(payload: AdminSettingRequest): Observable<AdminSettingResponse> {
    return this.http.put<AdminSettingResponse>(`${API_URL}/settings`, payload);
  }

  audit(): Observable<AdminAuditResponse[]> {
    return this.getList<AdminAuditResponse>('audit');
  }

  logs(): Observable<AdminAuditResponse[]> {
    return this.getList<AdminAuditResponse>('logs');
  }

  private getList<T>(path: string): Observable<T[]> {
    if (!this.isBrowser) {
      return of([]);
    }
    return this.http.get<T[]>(`${API_URL}/${path}`);
  }
}
