import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
export const storeGuard = () => {
    const auth = inject(AuthService);
    const router = inject(Router);
    return auth.isStoreUser() || router.createUrlTree(['/login'], { queryParams: { area: 'loja' } });
};
//# sourceMappingURL=store.guard.js.map