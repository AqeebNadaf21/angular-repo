import { FilterHandler } from '../filter.handler';
import { ActiveFilterRating, RatingFilter } from '../../../../interfaces/filter';


export class FilterRatingHandler extends FilterHandler {
    type = 'rating';

    serialize(value: number[]): string {
        return value.join(',');
    }

    deserialize(value: string): number[] {
        return value !== '' ? value.split(',').map(parseFloat) : [];
    }

    isDefaultValue(filter: RatingFilter, value: number[]): boolean {
        return value.length === 0;
    }

    activeFilters(filter: RatingFilter): ActiveFilterRating[] {
        if (this.isDefaultValue(filter, filter.value)) {
            return [];
        }

        return filter.items.filter(x => filter.value.includes(x.rating)).map(item => ({
            id: `${filter.slug}/${item.rating}`,
            type: 'rating',
            original: filter,
            item,
        }));
    }

    getResetValue(activeFilters: ActiveFilterRating[]): string {
        const itemSlugs = activeFilters.map(x => x.item.rating);

        return this.serialize(activeFilters[0].original.value.filter(x => !itemSlugs.includes(x)));
    }
}
