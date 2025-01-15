import { Component, OnDestroy, OnInit } from '@angular/core';
import { AccountApi } from '../../../../api';
import { Subject } from 'rxjs';
import { Address } from '../../../../interfaces/address';
import { finalize, mergeMap, takeUntil } from 'rxjs/operators';
import { UrlService } from '../../../../services/url.service';

@Component({
    selector: 'app-page-addresses',
    templateUrl: './page-addresses.component.html',
    styleUrls: ['./page-addresses.component.scss'],
})
export class PageAddressesComponent implements OnInit, OnDestroy {
    private destroy$: Subject<void> = new Subject<void>();

    addresses: Address[] = [];

    removeInProgress: number[] = [];

    constructor(
        private account: AccountApi,
        public url: UrlService,
    ) { }

    ngOnInit(): void {
        this.account.getAddresses().pipe(takeUntil(this.destroy$)).subscribe(x => this.addresses = x);
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    remove(address: Address): void {
        if (this.removeInProgress.indexOf(address.id) !== -1) {
            return;
        }

        this.removeInProgress.push(address.id);

        this.account.delAddress(address.id).pipe(
            mergeMap(() => this.account.getAddresses()),
            finalize(() => {
                const index = this.removeInProgress.indexOf(address.id);

                if (index !== -1) {
                    this.removeInProgress.splice(index, 1);
                }
            }),
            takeUntil(this.destroy$),
        ).subscribe(addresses => this.addresses = addresses);
    }
}
