import { HttpClient, HttpParams } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { AuthResponse, CatalogSearchResponse, Category, Dashboard, Page, Product, Store } from '../models/marketplace.models';

const API_URL = 'http://localhost:8080/api/v1';
const emptyPage = <T>(): Page<T> => ({ content: [], totalElements: 0, totalPages: 0, number: 0 });
type StoreFilters = { segment?: string; q?: string; size?: number; latitude?: number; longitude?: number; radiusMeters?: number; preferNearby?: boolean };
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

  stores(filters?: StoreFilters): Observable<Page<Store>> {
    if (!this.isBrowser) {
      return of(emptyPage<Store>());
    }
    const location = this.locationFrom(filters);
    if (filters?.preferNearby && location) {
      return this.nearbyStores(location.latitude, location.longitude, filters.radiusMeters ?? 5000, filters.size ?? 24).pipe(
        map((stores) => this.pageFromStores(this.filterStores(stores, filters), filters.size ?? 24)),
        catchError(() => this.catalogStores(filters))
      );
    }
    return this.catalogStores(filters);
  }

  private catalogStores(filters?: StoreFilters): Observable<Page<Store>> {
    let params = new HttpParams().set('size', String(filters?.size ?? 12));
    if (filters?.segment) {
      params = params.set('segment', filters.segment);
    }
    if (filters?.q) {
      params = params.set('q', filters.q);
    }
    return this.http.get<Page<Store>>(`${API_URL}/catalog/stores`, { params });
  }

  private nearbyStores(latitude: number, longitude: number, radiusMeters: number, limit: number): Observable<Store[]> {
    const params = new HttpParams()
      .set('latitude', String(latitude))
      .set('longitude', String(longitude))
      .set('radiusMeters', String(radiusMeters))
      .set('limit', String(Math.min(Math.max(limit, 1), 100)));
    return this.http.get<Store[]>(`${API_URL}/stores/nearby`, { params });
  }

  private locationFrom(filters?: StoreFilters): { latitude: number; longitude: number } | null {
    const filterLatitude = filters?.latitude;
    const filterLongitude = filters?.longitude;
    if (this.validCoordinate(filterLatitude, filterLongitude)) {
      return { latitude: filterLatitude as number, longitude: filterLongitude as number };
    }
    if (typeof localStorage === 'undefined') {
      return null;
    }
    for (const key of ['elide.deliveryLocation', 'elide.lastLocation', 'elide.location']) {
      const parsed = this.parseLocation(localStorage.getItem(key));
      if (parsed) {
        return parsed;
      }
    }
    return null;
  }

  private parseLocation(raw: string | null): { latitude: number; longitude: number } | null {
    if (!raw) {
      return null;
    }
    try {
      const value = JSON.parse(raw) as { latitude?: unknown; longitude?: unknown; lat?: unknown; lng?: unknown };
      const latitude = Number(value.latitude ?? value.lat);
      const longitude = Number(value.longitude ?? value.lng);
      return this.validCoordinate(latitude, longitude) ? { latitude, longitude } : null;
    } catch {
      return null;
    }
  }

  private validCoordinate(latitude: unknown, longitude: unknown): boolean {
    return typeof latitude === 'number'
      && typeof longitude === 'number'
      && Number.isFinite(latitude)
      && Number.isFinite(longitude)
      && latitude >= -90
      && latitude <= 90
      && longitude >= -180
      && longitude <= 180;
  }

  private filterStores(stores: Store[], filters?: StoreFilters): Store[] {
    const segment = this.normalize(filters?.segment);
    const q = this.normalize(filters?.q);
    return stores.filter((store) => {
      const matchesSegment = !segment || this.normalize(store.segment).includes(segment);
      const matchesQuery = !q || this.normalize(`${store.name} ${store.segment}`).includes(q);
      return matchesSegment && matchesQuery;
    });
  }

  private pageFromStores(stores: Store[], size: number): Page<Store> {
    const content = stores.slice(0, size);
    return { content, totalElements: content.length, totalPages: content.length ? 1 : 0, number: 0 };
  }

  private normalize(value?: string): string {
    return (value ?? '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
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

  searchCatalog(q?: string, size = 20): Observable<CatalogSearchResponse> {
    if (!this.isBrowser) {
      return of({ stores: emptyPage<Store>(), products: emptyPage<Product>(), categories: [] });
    }
    let params = new HttpParams().set('size', String(size));
    if (q) {
      params = params.set('q', q);
    }
    return this.http.get<CatalogSearchResponse>(`${API_URL}/catalog/search`, { params });
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
