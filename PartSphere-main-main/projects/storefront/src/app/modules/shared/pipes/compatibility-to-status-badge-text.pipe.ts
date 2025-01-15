import { Pipe, PipeTransform } from '@angular/core';
import { ProductCompatibilityResult } from '../../../interfaces/product';

@Pipe({
    name: 'compatibilityToStatusBadgeText',
})
export class CompatibilityToStatusBadgeTextPipe implements PipeTransform {
    transform(value: ProductCompatibilityResult): string {
        const map: {[K in ProductCompatibilityResult]: string} = {
            'all': 'TEXT_COMPATIBILITY_ALL',
            'fit': 'TEXT_COMPATIBILITY_FIT',
            'not-fit': 'TEXT_COMPATIBILITY_NOT_FIT',
            'unknown': 'TEXT_COMPATIBILITY_UNKNOWN',
        };

        return map[value];
    }
}
