import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
export const authGuard = () => {
    const auth = inject(AuthService);
    const router = inject(Router);
    return auth.isAuthenticated() || router.createUrlTree(['/login']);
};
//# sourceMappingURL=auth.guard.js.map