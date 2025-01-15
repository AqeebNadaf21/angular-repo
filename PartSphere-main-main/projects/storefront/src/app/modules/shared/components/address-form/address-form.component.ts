import { Component, forwardRef, OnDestroy, OnInit } from '@angular/core';
import {
    AbstractControl,
    ControlValueAccessor,
    FormBuilder,
    FormGroup,
    NG_VALIDATORS,
    NG_VALUE_ACCESSOR,
    ValidationErrors,
    Validator,
    Validators,
} from '@angular/forms';
import { Country } from '../../../../interfaces/country';
import { CountriesApi } from '../../../../api';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

let uniqueId = 0;

export interface AddressFormValue {
    firstName: string;
    lastName: string;
    company: string;
    country: string;
    address1: string;
    address2: string;
    city: string;
    state: string;
    postcode: string;
    email: string;
    phone: string;
}

@Component({
    selector: 'app-address-form',
    templateUrl: './address-form.component.html',
    styleUrls: ['./address-form.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => AddressFormComponent),
            multi: true,
        },
        {
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => AddressFormComponent),
            multi: true,
        },
    ],
})
export class AddressFormComponent implements OnInit, OnDestroy, ControlValueAccessor, Validator {
    private destroy$: Subject<void> = new Subject<void>();
    private readonly dataId: number = ++uniqueId;

    form!: FormGroup;

    countries: Country[] = [];

    get formId(): string {
        return `app-address-form-id-${this.dataId}`;
    }

    changeFn: (_: AddressFormValue) => void = () => {};

    touchedFn: () => void = () => {};

    constructor(
        private fb: FormBuilder,
        private countriesService: CountriesApi,
    ) { }

    ngOnInit(): void {
        this.form = this.fb.group({
            firstName: ['', Validators.required],
            lastName:  ['', Validators.required],
            company:   [''],
            country:   ['', Validators.required],
            address1:  ['', Validators.required],
            address2:  [''],
            city:      ['', Validators.required],
            state:     ['', Validators.required],
            postcode:  ['', Validators.required],
            email:     ['', [Validators.required, Validators.email]],
            phone:     ['', Validators.required],
        });

        this.form.valueChanges.subscribe(value => {
            this.changeFn(value);
            this.touchedFn();
        });

        this.countriesService.getCountries().pipe(takeUntil(this.destroy$)).subscribe(x => this.countries = x);
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    registerOnChange(fn: any): void {
        this.changeFn = fn;
    }

    registerOnTouched(fn: any): void {
        this.touchedFn = fn;
    }

    setDisabledState(isDisabled: boolean): void {
        if (isDisabled) {
            this.form.disable({ emitEvent: false });
        } else {
            this.form.enable({ emitEvent: false });
        }
    }

    writeValue(value: any): void {
        if (typeof value !== 'object') {
            value = {};
        }

        this.form.setValue(
            {
                firstName: '',
                lastName: '',
                company: '',
                country: '',
                address1: '',
                address2: '',
                city: '',
                state: '',
                postcode: '',
                email: '',
                phone: '',
                ...value,
            },
            { emitEvent: false },
        );
    }

    validate(control: AbstractControl): ValidationErrors | null {
        return this.form.valid ? null : { addressForm: this.form.errors };
    }

    markAsTouched(): void {
        this.form.markAllAsTouched();
    }
}
