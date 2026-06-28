import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthResponse, Category, Dashboard, Page, Product, Store } from '../models/marketplace.models';

const API_URL = 'http://localhost:8080/api/v1';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private readonly http = inject(HttpClient);

  login(username: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${API_URL}/auth/login`, { username, password });
  }

  register(payload: { username: string; email: string; password: string; fullName: string }): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${API_URL}/auth/register`, payload);
  }

  categories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${API_URL}/catalog/categories`);
  }

  stores(): Observable<Page<Store>> {
    return this.http.get<Page<Store>>(`${API_URL}/catalog/stores?size=12`);
  }

  products(storeId: string): Observable<Page<Product>> {
    return this.http.get<Page<Product>>(`${API_URL}/catalog/stores/${storeId}/products?size=20`);
  }

  dashboard(): Observable<Dashboard> {
    return this.http.get<Dashboard>(`${API_URL}/admin/dashboard`);
  }

  createOrder(payload: unknown): Observable<unknown> {
    return this.http.post(`${API_URL}/orders`, payload);
  }

  myOrders(): Observable<unknown[]> {
    return this.http.get<unknown[]>(`${API_URL}/orders/mine`);
  }
}

