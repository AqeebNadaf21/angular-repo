import { FilterHandler } from '../filter.handler';
import { ActiveFilterColor, ColorFilter } from '../../../../interfaces/filter';


export class FilterColorHandler extends FilterHandler {
    type = 'color';

    serialize(value: string[]): string {
        return value.join(',');
    }

    deserialize(value: string): string[] {
        return value !== '' ? value.split(',') : [];
    }

    isDefaultValue(filter: ColorFilter, value: string[]): boolean {
        return value.length === 0;
    }

    activeFilters(filter: ColorFilter): ActiveFilterColor[] {
        if (this.isDefaultValue(filter, filter.value)) {
            return [];
        }

        return filter.items.filter(x => filter.value.includes(x.slug)).map(item => ({
            id: `${filter.slug}/${item.slug}`,
            type: filter.type,
            original: filter,
            item,
        }));
    }

    getResetValue(activeFilters: ActiveFilterColor[]): string {
        const itemSlugs = activeFilters.map(x => x.item.slug);

        return this.serialize(activeFilters[0].original.value.filter(x => !itemSlugs.includes(x)));
    }
}
