import { ChangeDetectorRef, Inject, LOCALE_ID, Pipe, PipeTransform } from '@angular/core';
import { ActiveFilter } from '../../../interfaces/filter';
import { CurrencyFormatPipe } from '../../currency/pipes/currency-format.pipe';
import { CurrencyService } from '../../currency/services/currency.service';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Pipe({
    name: 'activeFilterLabel',
})
export class ActiveFilterLabelPipe implements PipeTransform {
    currencyFormatPipe = new CurrencyFormatPipe(this.locale, this.currencyService);
    translatePipe = new TranslatePipe(this.translateService, this.cdr);

    constructor(
        @Inject(LOCALE_ID) private locale: string,
        private currencyService: CurrencyService,
        private translateService: TranslateService,
        private cdr: ChangeDetectorRef,
    ) {}

    transform(filter: ActiveFilter): string {
        this.currencyFormatPipe.transform(0);
        switch (filter.type) {
            case 'vehicle':
                if (!filter.original.vehicle) {
                    throw new Error('filter.original.vehicle is null');
                }

                return `${filter.original.vehicle.year} ${filter.original.vehicle.make} ${filter.original.vehicle.model}`;
            case 'range':
                const [min, max] = filter.original.value;

                return `${this.currencyFormatPipe.transform(min)} - ${this.currencyFormatPipe.transform(max)}`;
            case 'check':
                return filter.item.name;
            case 'radio':
                return `${ filter.original.name }: ${ filter.item.name }`;
            case 'rating':
                return this.translatePipe.transform('TEXT_STARS', { stars: filter.item.rating });
            case 'color':
                return filter.item.name;
        }

        return '';
    }
}
