import { Component, forwardRef, HostBinding, Input } from '@angular/core';
import { ColorFilter, ColorFilterItem } from '../../../../interfaces/filter';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ColorType, colorType } from '../../../../functions/color';

@Component({
    selector: 'app-filter-color',
    templateUrl: './filter-color.component.html',
    styleUrls: ['./filter-color.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => FilterColorComponent),
            multi: true,
        },
    ],
})
export class FilterColorComponent implements ControlValueAccessor {
    value: string[] = [];

    @Input() options!: ColorFilter;

    @HostBinding('class.filter-color') classFilterColor = true;

    changeFn: (_: string[]) => void = () => {};

    touchedFn: () => void = () => {};

    constructor() { }

    registerOnChange(fn: any): void {
        this.changeFn = fn;
    }

    registerOnTouched(fn: any): void {
        this.touchedFn = fn;
    }

    writeValue(value: string[]): void {
        this.value = value;
    }

    colorType(color: string): ColorType {
        return colorType(color);
    }

    onItemChange(item: ColorFilterItem, event: Event): void {
        const checked = (event.target as HTMLInputElement).checked;

        if (checked && !this.isItemChecked(item)) {
            this.value = [...this.value, item.slug];
            this.changeFn(this.value);
        }
        if (!checked && this.isItemChecked(item)) {
            this.value = this.value.filter(x => x !== item.slug);
            this.changeFn(this.value);
        }
    }

    isItemChecked(item: ColorFilterItem): boolean {
        return this.value.includes(item.slug);
    }

    trackBySlug(index: number, item: ColorFilterItem): string {
        return item.slug;
    }
}
