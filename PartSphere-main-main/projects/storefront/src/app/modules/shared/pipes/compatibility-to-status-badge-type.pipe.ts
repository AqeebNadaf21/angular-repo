import { Pipe, PipeTransform } from '@angular/core';
import { ProductCompatibilityResult } from '../../../interfaces/product';
import { StatusBadgeType } from '../components/status-badge/status-badge.component';

@Pipe({
    name: 'compatibilityToStatusBadgeType',
})
export class CompatibilityToStatusBadgeTypePipe implements PipeTransform {
    transform(value: ProductCompatibilityResult): StatusBadgeType {
        const map: {[K in ProductCompatibilityResult]: StatusBadgeType} = {
            'all': 'unknown',
            'fit': 'success',
            'not-fit': 'failure',
            'unknown': 'warning',
        };

        return map[value];
    }
}
