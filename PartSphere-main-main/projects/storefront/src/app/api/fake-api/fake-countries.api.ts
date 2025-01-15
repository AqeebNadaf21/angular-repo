import { Injectable } from '@angular/core';
import { CountriesApi } from '../base';
import { Observable } from 'rxjs';
import { Country } from '../../interfaces/country';
import { getCountries } from '../../../fake-server/endpoints';


@Injectable()
export class FakeCountriesApi extends CountriesApi {
    getCountries(): Observable<Country[]> {
        return getCountries();
    }
}
