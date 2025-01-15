import { Observable, of } from 'rxjs';
import { Country } from '../../app/interfaces/country';
import { clone } from '../utils';

const countries: Country[] = [
    { code: 'RAND', name: 'Random Federation' },
    { code: 'LAND', name: 'RandomLand' },

    { code: 'AU', name: 'Australia' },
    { code: 'DE', name: 'Germany' },
    { code: 'FR', name: 'France' },
    { code: 'IT', name: 'Italy' },
    { code: 'RU', name: 'Russia' },
    { code: 'UA', name: 'Ukraine' },
    { code: 'US', name: 'United States' },
];

export function getCountries(): Observable<Country[]> {
    return of(clone(countries));
}
