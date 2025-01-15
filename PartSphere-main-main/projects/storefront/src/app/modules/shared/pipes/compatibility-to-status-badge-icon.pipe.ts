import { Pipe, PipeTransform } from '@angular/core';
import { ProductCompatibilityResult } from '../../../interfaces/product';
import { StatusBadgeIcon } from '../components/status-badge/status-badge.component';

@Pipe({
    name: 'compatibilityToStatusBadgeIcon',
})
export class CompatibilityToStatusBadgeIconPipe implements PipeTransform {
    transform(value: ProductCompatibilityResult): StatusBadgeIcon {
        const map: {[K in ProductCompatibilityResult]: StatusBadgeIcon} = {
            'all': 'success',
            'fit': 'success',
            'not-fit': 'failure',
            'unknown': 'failure',
        };

        return map[value];
    }
}
