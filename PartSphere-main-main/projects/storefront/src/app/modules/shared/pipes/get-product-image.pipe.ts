import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../../../interfaces/product';

@Pipe({
    name: 'getProductImage',
})
export class GetProductImagePipe implements PipeTransform {
    transform(value: Product): string {
        const images = value?.images || [];

        return images[0] || '';
    }
}
