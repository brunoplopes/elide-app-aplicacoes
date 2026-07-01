import { ChangeDetectionStrategy, Component, OnInit, inject, signal } from '@angular/core';
import { catchError, finalize, of } from 'rxjs';
import { CustomerWalletEntry } from '../../models/marketplace.models';
import { CustomerApiService } from '../../services/customer-api.service';
import { MATERIAL } from '../shared/page-kit';
import { ClientHeadingComponent } from '../shared/client-heading.component';
import { CustomerNavComponent } from '../shared/customer-nav.component';

@Component({
  selector: 'elide-wallet-page',
  imports: [...MATERIAL, ClientHeadingComponent, CustomerNavComponent],
  templateUrl: './wallet.component.html',
  styleUrl: './wallet.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WalletPageComponent implements OnInit {
  private readonly api = inject(CustomerApiService);

  readonly page = this;
  readonly balance = signal(0);
  readonly entries = signal<CustomerWalletEntry[]>([]);
  readonly loading = signal(true);
  readonly message = signal<string | null>(null);

  ngOnInit(): void {
    this.loading.set(true);
    this.api.wallet().pipe(catchError(() => {
      this.message.set('Endpoint /customer/wallet ainda nao respondeu.');
      return of({ balance: 0, entries: [] });
    }), finalize(() => this.loading.set(false))).subscribe((wallet) => {
      this.balance.set(wallet.balance);
      this.entries.set(wallet.entries);
    });
  }

  money(value: number): string {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value ?? 0);
  }
}
