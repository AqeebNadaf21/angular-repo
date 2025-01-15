import { Pipe, PipeTransform } from '@angular/core';
import { ProductStock } from '../../../interfaces/product';

@Pipe({
    name: 'stockToStatusBadgeText',
})
export class StockToStatusBadgeTextPipe implements PipeTransform {
    transform(value: ProductStock): string {
        const map: {[K in ProductStock]: string} = {
            'in-stock': 'TEXT_STOCK_IN_STOCK',
            'out-of-stock': 'TEXT_STOCK_OUT_OF_STOCK',
            'on-backorder': 'TEXT_STOCK_ON_BACKORDER',
        };

        return map[value];
    }
}
