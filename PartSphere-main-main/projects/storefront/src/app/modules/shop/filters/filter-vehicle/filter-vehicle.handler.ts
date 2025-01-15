import { FilterHandler } from '../filter.handler';
import { ActiveFilterCheck, ActiveFilterVehicle, VehicleFilter } from '../../../../interfaces/filter';


export class FilterVehicleHandler extends FilterHandler {
    type = 'vehicle';

    serialize(value: number): string|null {
        return value ? value.toString() : null;
    }

    deserialize(value: string): number|null {
        return value ? parseFloat(value) : null;
    }

    isDefaultValue(filter: VehicleFilter, value: number): boolean {
        return value === null;
    }

    activeFilters(filter: VehicleFilter): ActiveFilterVehicle[] {
        return filter.value ? [{ id: filter.slug, type: 'vehicle', original: filter }] : [];
    }

    getResetValue(activeFilters: ActiveFilterCheck[]): string|null {
        return null;
    }
}
