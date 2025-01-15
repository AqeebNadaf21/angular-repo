import { Country } from '../../interfaces/country';
import { Observable } from 'rxjs';

export abstract class CountriesApi {
    abstract getCountries(): Observable<Country[]>;
}
