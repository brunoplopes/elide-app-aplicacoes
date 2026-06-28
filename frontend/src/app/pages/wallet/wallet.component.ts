import { ChangeDetectionStrategy, Component, OnInit, inject, signal } from '@angular/core';
import { catchError, of } from 'rxjs';
import { CustomerWalletEntry } from '../../models/marketplace.models';
import { CustomerApiService } from '../../services/customer-api.service';
import { MATERIAL } from '../shared/page-kit';
import { ClientHeadingComponent } from '../shared/client-heading.component';

@Component({
  selector: 'elide-wallet-page',
  imports: [...MATERIAL, ClientHeadingComponent],
  templateUrl: './wallet.component.html',
  styleUrl: './wallet.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WalletPageComponent implements OnInit {
  private readonly api = inject(CustomerApiService);

  readonly page = this;
  readonly balance = signal(0);
  readonly entries = signal<CustomerWalletEntry[]>([]);
  readonly message = signal<string | null>(null);

  ngOnInit(): void {
    this.api.wallet().pipe(catchError(() => {
      this.message.set('Endpoint /customer/wallet ainda nao respondeu.');
      return of({ balance: 0, entries: [] });
    })).subscribe((wallet) => {
      this.balance.set(wallet.balance);
      this.entries.set(wallet.entries);
    });
  }

  money(value: number): string {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value ?? 0);
  }
}
