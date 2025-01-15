import { Pipe, PipeTransform } from '@angular/core';
import { ProductStock } from '../../../interfaces/product';
import { StatusBadgeType } from '../components/status-badge/status-badge.component';

@Pipe({
    name: 'stockToStatusBadgeType',
})
export class StockToStatusBadgeTypePipe implements PipeTransform {
    transform(value: ProductStock): StatusBadgeType {
        const map: {[K in ProductStock]: StatusBadgeType} = {
            'in-stock': 'success',
            'out-of-stock': 'failure',
            'on-backorder': 'warning',
        };

        return map[value];
    }
}
