import { FilterHandler } from '../filter.handler';
import { ActiveFilterRadio, RadioFilter } from '../../../../interfaces/filter';


export class FilterRadioHandler extends FilterHandler {
    type = 'radio';

    serialize(value: string): string {
        return value;
    }

    deserialize(value: string): string {
        return value;
    }

    isDefaultValue(filter: RadioFilter, value: string|null): boolean {
        return filter.items[0].slug === value;
    }

    activeFilters(filter: RadioFilter): ActiveFilterRadio[] {
        if (this.isDefaultValue(filter, filter.value)) {
            return [];
        }

        const item = filter.items.find(x => x.slug === filter.value);

        if (!item) {
            throw new Error('Filter item not found');
        }

        return [{
            id: filter.slug,
            type: filter.type,
            original: filter,
            item,
        }];
    }

    getResetValue(activeFilters: ActiveFilterRadio[]): string {
        return activeFilters[0].original.items[0].slug;
    }
}
