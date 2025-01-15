import { Component, forwardRef, HostBinding, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { RadioFilter } from '../../../../interfaces/filter';
import { filter, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-filter-radio',
    templateUrl: './filter-radio.component.html',
    styleUrls: ['./filter-radio.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => FilterRadioComponent),
            multi: true,
        },
    ],
})
export class FilterRadioComponent implements OnInit, OnDestroy, ControlValueAccessor {
    private destroy$: Subject<void> = new Subject<void>();

    value: any;

    control: FormControl = new FormControl();

    @Input() options!: RadioFilter;

    @HostBinding('class.filter-list') classFilterList = true;

    changeFn: (_: number) => void = () => {};

    touchedFn: () => void = () => {};

    constructor() { }

    ngOnInit(): void {
        this.control.valueChanges.pipe(
            filter(value => value !== this.value),
            takeUntil(this.destroy$),
        ).subscribe(value => {
            this.value = value;
            this.changeFn(value);
        });
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

    writeValue(obj: any): void {
        this.control.setValue(this.value = obj, { emitEvent: false });
    }
}
