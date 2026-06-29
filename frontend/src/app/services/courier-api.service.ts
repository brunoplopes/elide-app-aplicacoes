import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  CourierAvailabilityRequest,
  CourierDashboardResponse,
  CourierDeclineRequest,
  CourierDeliveryResponse,
  CourierDocumentRequest,
  CourierDocumentResponse,
  CourierEarningsResponse,
  CourierLocationRequest,
  CourierLocationResponse,
  CourierMapResponse,
  CourierProfileResponse,
  CourierSignupRequest,
  OrderStatus
} from '../models/marketplace.models';

const API_URL = 'http://localhost:8080/api/v1';

@Injectable({ providedIn: 'root' })
export class CourierApiService {
  private readonly http = inject(HttpClient);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  signup(payload: CourierSignupRequest): Observable<CourierProfileResponse> {
    return this.http.post<CourierProfileResponse>(`${API_URL}/courier/signup`, payload);
  }

  profile(): Observable<CourierProfileResponse> {
    return this.http.get<CourierProfileResponse>(`${API_URL}/courier/profile`);
  }

  sendDocument(payload: CourierDocumentRequest): Observable<CourierDocumentResponse> {
    return this.http.post<CourierDocumentResponse>(`${API_URL}/courier/documents`, payload);
  }

  documents(): Observable<CourierDocumentResponse[]> {
    if (!this.isBrowser) {
      return of([]);
    }
    return this.http.get<CourierDocumentResponse[]>(`${API_URL}/courier/documents`);
  }

  setAvailability(payload: CourierAvailabilityRequest): Observable<CourierProfileResponse> {
    return this.http.patch<CourierProfileResponse>(`${API_URL}/courier/availability`, payload);
  }

  updateLocation(payload: CourierLocationRequest): Observable<CourierLocationResponse> {
    return this.http.post<CourierLocationResponse>(`${API_URL}/courier/location`, payload);
  }

  map(): Observable<CourierMapResponse> {
    if (!this.isBrowser) {
      return of({ location: null, activeDelivery: null, encodedPolyline: null });
    }
    return this.http.get<CourierMapResponse>(`${API_URL}/courier/map`);
  }

  availableRides(): Observable<CourierDeliveryResponse[]> {
    if (!this.isBrowser) {
      return of([]);
    }
    return this.http.get<CourierDeliveryResponse[]>(`${API_URL}/courier/rides/available`);
  }

  acceptRide(orderId: string): Observable<CourierDeliveryResponse> {
    return this.http.post<CourierDeliveryResponse>(`${API_URL}/courier/rides/${orderId}/accept`, {});
  }

  declineRide(orderId: string, payload: CourierDeclineRequest = {}): Observable<void> {
    return this.http.post<void>(`${API_URL}/courier/rides/${orderId}/decline`, payload);
  }

  updateDeliveryStatus(orderId: string, status: OrderStatus): Observable<CourierDeliveryResponse> {
    return this.http.patch<CourierDeliveryResponse>(`${API_URL}/courier/deliveries/${orderId}/status`, { status });
  }

  history(): Observable<CourierDeliveryResponse[]> {
    if (!this.isBrowser) {
      return of([]);
    }
    return this.http.get<CourierDeliveryResponse[]>(`${API_URL}/courier/deliveries/history`);
  }

  earnings(): Observable<CourierEarningsResponse> {
    if (!this.isBrowser) {
      return of({ daily: 0, monthly: 0, statement: [] });
    }
    return this.http.get<CourierEarningsResponse>(`${API_URL}/courier/earnings`);
  }

  dashboard(): Observable<CourierDashboardResponse> {
    return this.http.get<CourierDashboardResponse>(`${API_URL}/courier/dashboard`);
  }
}
