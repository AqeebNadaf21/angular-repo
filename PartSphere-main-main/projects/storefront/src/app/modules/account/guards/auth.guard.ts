import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, OperatorFunction } from 'rxjs';
import { AccountApi } from '../../../api';
import { map } from 'rxjs/operators';

type Pipe = ((source$: Observable<boolean>) => Observable<boolean>)
    | OperatorFunction<boolean, boolean | UrlTree>;

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {
    constructor(
        private account: AccountApi,
        private router: Router,
    ) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        const authGuardMode = next.data['authGuardMode'] || 'redirectToLogin';
        let pipe: Pipe = (source$: Observable<boolean>) => source$;

        if (authGuardMode === 'redirectToLogin')  {
            pipe = map((isAuth: boolean) => isAuth || this.router.createUrlTree(['account/login']));
        } else if (authGuardMode === 'redirectToDashboard') {
            pipe = map((isAuth: boolean) => !isAuth || this.router.createUrlTree(['account/dashboard']));
        }

        return this.account.user$.pipe(map(user => !!user), pipe);
    }
}
