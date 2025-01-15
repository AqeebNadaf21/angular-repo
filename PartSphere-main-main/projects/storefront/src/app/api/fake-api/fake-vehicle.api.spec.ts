import { TestBed } from '@angular/core/testing';

import { FakeVehicleApi } from './fake-vehicle.api';

describe('FakeVehicleApi', () => {
    let service: FakeVehicleApi;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(FakeVehicleApi);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
