import { TestBed } from '@angular/core/testing';

import { FakeCountriesApi } from './fake-countries.api';

describe('FakeCountriesApi', () => {
    let service: FakeCountriesApi;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(FakeCountriesApi);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
