import { FilterHandler } from '../filter.handler';
import { ActiveFilterRange, RangeFilter } from '../../../../interfaces/filter';


export class FilterRangeHandler extends FilterHandler {
    type = 'range';

    serialize(value: [number, number]): string {
        return value.join('-');
    }

    deserialize(value: string): [number, number] {
        const [min, max] = value.split('-').map(parseFloat);

        return [min, max];
    }

    isDefaultValue(filter: RangeFilter, value: [number, number]): boolean {
        return filter.min === value[0] && filter.max === value[1];
    }

    activeFilters(filter: RangeFilter): ActiveFilterRange[] {
        if (this.isDefaultValue(filter, filter.value)) {
            return [];
        }

        return [{
            id: filter.slug,
            type: filter.type,
            original: filter,
        }];
    }

    getResetValue(activeFilters: ActiveFilterRange[]): string {
        return this.serialize([activeFilters[0].original.min, activeFilters[0].original.max]);
    }
}
