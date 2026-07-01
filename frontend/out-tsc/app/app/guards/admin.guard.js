import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
export const adminGuard = () => {
    const auth = inject(AuthService);
    const router = inject(Router);
    return auth.isAdmin() || router.createUrlTree(['/login'], { queryParams: { area: 'admin' } });
};
//# sourceMappingURL=admin.guard.js.map