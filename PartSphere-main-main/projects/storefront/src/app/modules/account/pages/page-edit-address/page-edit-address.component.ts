import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest, Observable, of, Subject } from 'rxjs';
import { finalize, map, switchMap, takeUntil } from 'rxjs/operators';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AddressFormComponent } from '../../../shared/components/address-form/address-form.component';
import { AccountApi, EditAddressData } from '../../../../api';
import { Address } from '../../../../interfaces/address';

@Component({
    selector: 'app-page-edit-address',
    templateUrl: './page-edit-address.component.html',
    styleUrls: ['./page-edit-address.component.scss'],
})
export class PageEditAddressComponent implements OnInit, OnDestroy {
    private destroy$: Subject<void> = new Subject<void>();

    form!: FormGroup;

    @ViewChild(AddressFormComponent) addressForm!: AddressFormComponent;

    addressId: number|null = null;
    saveInProgress = false;
    firstOrDefaultAddress: boolean = false;

    constructor(
        private accountApi: AccountApi,
        private router: Router,
        private route: ActivatedRoute,
        private fb: FormBuilder,
    ) { }

    ngOnInit(): void {
        this.form = this.fb.group({
            address: [],
            default: [false],
        });

        this.route.params.pipe(
            map(x => x['id'] ? parseFloat(x['id']) : null),
            switchMap(addressId => combineLatest([
                addressId ? this.accountApi.getAddress(addressId) : of(null),
                this.accountApi.getDefaultAddress(),
            ])),
            takeUntil(this.destroy$),
        ).subscribe(([address, defaultAddress]) => {
            if (address) {
                this.addressId = address.id;

                this.form.get('address')!.setValue({
                    firstName: address.firstName,
                    lastName: address.lastName,
                    company: address.company,
                    country: address.country,
                    address1: address.address1,
                    address2: address.address2,
                    city: address.city,
                    state: address.state,
                    postcode: address.postcode,
                    email: address.email,
                    phone: address.phone,
                });
            }

            this.firstOrDefaultAddress = !defaultAddress || (address !== null && address.default);
            this.form.get('default')!.setValue(this.firstOrDefaultAddress);

            if (this.firstOrDefaultAddress) {
                this.form.get('default')!.disable();
            } else {
                this.form.get('default')!.enable();
            }
        });
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    save(): void {
        this.form.markAllAsTouched();
        this.addressForm.markAsTouched();

        if (this.saveInProgress || this.form.invalid){
            return;
        }

        const addressData: EditAddressData = {
            ...this.form.value.address,
            default: this.form.value.default || this.firstOrDefaultAddress,
        };

        this.saveInProgress = true;

        let saveMethod: Observable<Address>;

        if (this.addressId) {
            saveMethod = this.accountApi.editAddress(this.addressId, addressData);
        } else {
            saveMethod = this.accountApi.addAddress(addressData);
        }

        saveMethod.pipe(
            finalize(() => this.saveInProgress = false),
            takeUntil(this.destroy$),
        ).subscribe(() => this.router.navigateByUrl('/account/addresses'));
    }
}
