import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DesktopHeaderVariant, HeaderService, MobileHeaderVariant } from '../../services/header.service';
import { takeUntil } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';


export interface RootComponentData {
    desktopHeader: DesktopHeaderVariant;
    mobileHeader: MobileHeaderVariant;
}


@Component({
    selector: 'app-root',
    templateUrl: './root.component.html',
    styleUrls: ['./root.component.scss'],
})
export class RootComponent implements OnInit, OnDestroy {
    destroy$: Subject<void> =  new Subject<void>();

    constructor(
        private route: ActivatedRoute,
        public header: HeaderService,
    ) { }

    ngOnInit(): void {
        const data$ = this.route.data as Observable<RootComponentData>;

        data$.pipe(
            takeUntil(this.destroy$),
        ).subscribe((data: RootComponentData) => {
            this.header.setDesktopVariant(data.desktopHeader || 'spaceship/one');
            this.header.setMobileVariant(data.mobileHeader || 'one');
        });
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
