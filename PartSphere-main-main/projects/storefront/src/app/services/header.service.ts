import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';


export type DesktopHeaderVariant =
    'spaceship/one' |
    'spaceship/two' |
    'spaceship/three' |
    'classic/one' |
    'classic/two' |
    'classic/three' |
    'classic/four' |
    'classic/five';


export type DesktopHeaderLayout = 'classic' | 'spaceship';


export type MobileHeaderVariant = 'one' | 'two';


@Injectable({
    providedIn: 'root',
})
export class HeaderService {
    private desktopVariantSubject$: BehaviorSubject<DesktopHeaderVariant|null> = new BehaviorSubject<DesktopHeaderVariant|null>(null);

    private mobileVariantSubject$: BehaviorSubject<MobileHeaderVariant|null> = new BehaviorSubject<MobileHeaderVariant|null>(null);

    desktopLayout$: Observable<DesktopHeaderLayout> = this.desktopVariantSubject$.pipe(
        map(() => this.desktopLayout),
    );

    get desktopVariant(): string|null {
        return this.desktopVariantSubject$.value;
    }

    get desktopVariantClass(): string {
        return this.desktopVariant?.replace('/', '-') || '';
    }

    get desktopLayout(): DesktopHeaderLayout {
        return (this.desktopVariant ? this.desktopVariant.split('/')[0] : null) as DesktopHeaderLayout;
    }

    get mobileVariant(): MobileHeaderVariant|null {
        return this.mobileVariantSubject$.value;
    }

    constructor() { }

    setDesktopVariant(variant: DesktopHeaderVariant): void {
        this.desktopVariantSubject$.next(variant);
    }

    setMobileVariant(variant: MobileHeaderVariant): void {
        this.mobileVariantSubject$.next(variant);
    }
}
