import { TestBed } from '@angular/core/testing';
import { CartService } from './cart.service';

describe('CartService', () => {
  it('adds quantities and calculates totals', () => {
    const service = TestBed.inject(CartService);
    const product = { id: 'p1', name: 'Combo', description: 'Teste', price: 29.9, stockQuantity: 10 };

    service.add(product);
    service.add(product);

    expect(service.items().length).toBe(1);
    expect(service.items()[0].quantity).toBe(2);
    expect(service.total()).toBe(59.8);
  });
});

