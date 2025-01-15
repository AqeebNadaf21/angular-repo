import { Component, forwardRef, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Vehicle } from '../../../../interfaces/vehicle';
import { VehicleApi } from '../../../../api';
import { Observable, of, Subject } from 'rxjs';
import { switchMap, takeUntil, tap } from 'rxjs/operators';

type ChangeFn = (_: Vehicle|null) => void;

type TouchedFn = () => void;

interface VehicleSelectItemDef<T = any> {
    key: string;
    label: string;
    placeholder: string;
    optionsSource: (...args: any[]) => Observable<T[]>;
    serializeOptionFn?: (option: T, item: VehicleSelectItem<T>) => string;
    deserializeOptionFn?: (value: string, item: VehicleSelectItem<T>) => T;
}

interface VehicleSelectItem<T = any> extends VehicleSelectItemDef<T> {
    loading: boolean;
    options: T[];
    load: Subject<void>;
}

function makeItem<T>(itemDef: VehicleSelectItemDef<T>): VehicleSelectItem<T> {
    return { ...itemDef, loading: false, options: [], load: new Subject<void>() };
}

@Component({
    selector: 'app-vehicle-select',
    templateUrl: './vehicle-select.component.html',
    styleUrls: ['./vehicle-select.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => VehicleSelectComponent),
            multi: true,
        },
    ],
})
export class VehicleSelectComponent implements OnInit, OnDestroy, ControlValueAccessor {
    private destroy$: Subject<void> = new Subject<void>();

    value: Vehicle|null = null;

    form!: FormGroup;

    items: VehicleSelectItem[] = [];

    @HostBinding('class.vehicle-select') classVehicleSelect = true;

    changeFn: ChangeFn = () => {};

    touchedFn: TouchedFn = () => {};

    constructor(
        private vehicleApi: VehicleApi,
    ) { }

    ngOnInit(): void {
        this.items = [
            makeItem({
                key: 'year',
                label: 'INPUT_VEHICLE_YEAR_LABEL',
                placeholder: 'INPUT_VEHICLE_YEAR_PLACEHOLDER',
                optionsSource: this.vehicleApi.getYears,
                serializeOptionFn: (option: number) => option.toString(),
                deserializeOptionFn: (option: string) => parseFloat(option),
            }),
            makeItem({
                key: 'brand',
                label: 'INPUT_VEHICLE_BRAND_LABEL',
                placeholder: 'INPUT_VEHICLE_BRAND_PLACEHOLDER',
                optionsSource: this.vehicleApi.getMakes,
            }),
            makeItem({
                key: 'model',
                label: 'INPUT_VEHICLE_MODEL_LABEL',
                placeholder: 'INPUT_VEHICLE_MODEL_PLACEHOLDER',
                optionsSource: this.vehicleApi.getModels,
            }),
            makeItem({
                key: 'engine',
                label: 'INPUT_VEHICLE_ENGINE_LABEL',
                placeholder: 'INPUT_VEHICLE_ENGINE_PLACEHOLDER',
                optionsSource: this.vehicleApi.getVehicles,
                serializeOptionFn: (option: Vehicle) => option.engine,
                deserializeOptionFn: (option: string, item: VehicleSelectItem<Vehicle>) => {
                    const vehicle = item.options.find(x => x.engine === option);

                    if (!vehicle) {
                        throw new Error('Vehicle not found');
                    }

                    return vehicle;
                },
            }),
        ];

        const controls: {[key: string]: FormControl} = {};

        this.items.forEach((item, index) => {
            this.makeOptionsLoader(item, index).pipe(
                takeUntil(this.destroy$),
            ).subscribe(options => item.options = options);

            controls[item.key] = new FormControl('none');
            controls[item.key].valueChanges.pipe(
                takeUntil(this.destroy$),
            ).subscribe(() => this.onItemValueChange(index));
        });

        this.form = new FormGroup(controls);

        this.onItemValueChange(0);
        this.items[0].load.next();
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    registerOnChange(fn: ChangeFn): void {
        this.changeFn = fn;
    }

    registerOnTouched(fn: TouchedFn): void {
        this.touchedFn = fn;
    }

    writeValue(value: Vehicle): void { }

    serializeOption(option: any, item: VehicleSelectItem): string {
        if (item.serializeOptionFn) {
            return item.serializeOptionFn(option, item);
        }

        return option;
    }

    deserializeOption<T>(option: string, item: VehicleSelectItem<T>): T {
        if (item.deserializeOptionFn) {
            return item.deserializeOptionFn(option, item);
        }

        return option as any;
    }

    private setValue(value: Vehicle|null): void {
        if (this.value !== value) {
            this.value = value;
            this.changeFn(value);
        }
    }

    private onItemValueChange(index: number): void {
        const control: AbstractControl = this.getFormControl(this.items[index].key);

        this.items.slice(index + 1).forEach(nextItem => {
            nextItem.options = [];

            this.getFormControl(nextItem.key).setValue('none', { emitEvent: false });
            this.getFormControl(nextItem.key).disable({ emitEvent: false });
        });

        if (control.value === 'none') {
            this.setValue(null);
        } else {
            const nextItem = this.items.slice(index + 1, index + 2).pop();

            if (nextItem) {
                this.getFormControl(nextItem.key).enable({ emitEvent: false });

                nextItem.load.next();
            } else {
                this.setValue(this.deserializeOption(control.value, this.items[index]));
            }
        }
    }

    private getItemValue(item: VehicleSelectItem): any {
        const value = this.getFormControl(item.key).value;

        if (value !== 'none' && item.deserializeOptionFn) {
            return item.deserializeOptionFn(value, item);
        }

        return value;
    }

    private getFormControl(key: string): AbstractControl {
        const control = this.form.get(key);

        if (!control) {
            throw new Error(`Control ${key} not found`);
        }

        return control;
    }

    private getItemValues(items: VehicleSelectItem[]): any[] {
        return items.reduce<VehicleSelectItem[]>((acc, prevItem) => [...acc, this.getItemValue(prevItem)], []);
    }

    private makeOptionsLoader(item: VehicleSelectItem, index: number): Observable<any[]> {
        return item.load.pipe(
            tap(() => item.loading = true),
            switchMap(() => {
                const args = this.getItemValues(this.items.slice(0, index));

                if (args.length > 0 && args.slice().pop() === 'none') {
                    return of([]);
                }

                return item.optionsSource(...args);
            }),
            tap(() => item.loading = false),
        );
    }
}
