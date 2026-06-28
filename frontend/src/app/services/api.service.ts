import { HttpClient } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AuthResponse, Category, Dashboard, Page, Product, Store } from '../models/marketplace.models';

const API_URL = 'http://localhost:8080/api/v1';
const emptyPage = <T>(): Page<T> => ({ content: [], totalElements: 0, totalPages: 0, number: 0 });
const emptyDashboard: Dashboard = {
  revenue: 0,
  totalOrders: 0,
  totalUsers: 0,
  activeStores: 0,
  activeCouriers: 0,
  ordersByStatus: []
};

@Injectable({ providedIn: 'root' })
export class ApiService {
  private readonly http = inject(HttpClient);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  login(username: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${API_URL}/auth/login`, { username, password });
  }

  register(payload: { username: string; email: string; password: string; fullName: string }): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${API_URL}/auth/register`, payload);
  }

  forgotPassword(identifier: string): Observable<void> {
    return this.http.post<void>(`${API_URL}/auth/forgot-password`, { identifier });
  }

  changePassword(payload: { currentPassword: string; newPassword: string; confirmPassword: string }): Observable<void> {
    return this.http.post<void>(`${API_URL}/auth/change-password`, payload);
  }

  categories(): Observable<Category[]> {
    if (!this.isBrowser) {
      return of([]);
    }
    return this.http.get<Category[]>(`${API_URL}/catalog/categories`);
  }

  stores(): Observable<Page<Store>> {
    if (!this.isBrowser) {
      return of(emptyPage<Store>());
    }
    return this.http.get<Page<Store>>(`${API_URL}/catalog/stores?size=12`);
  }

  products(storeId: string): Observable<Page<Product>> {
    if (!this.isBrowser) {
      return of(emptyPage<Product>());
    }
    return this.http.get<Page<Product>>(`${API_URL}/catalog/stores/${storeId}/products?size=20`);
  }

  dashboard(): Observable<Dashboard> {
    if (!this.isBrowser) {
      return of(emptyDashboard);
    }
    return this.http.get<Dashboard>(`${API_URL}/admin/dashboard`);
  }

  createOrder(payload: unknown): Observable<unknown> {
    return this.http.post(`${API_URL}/orders`, payload);
  }

  myOrders(): Observable<unknown[]> {
    return this.http.get<unknown[]>(`${API_URL}/orders/mine`);
  }
}
