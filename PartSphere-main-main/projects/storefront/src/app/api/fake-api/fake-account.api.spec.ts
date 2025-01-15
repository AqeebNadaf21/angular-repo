import { TestBed } from '@angular/core/testing';

import { FakeAccountApi } from './fake-account.api';

describe('FakeAccountApi', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: FakeAccountApi = TestBed.get(FakeAccountApi);
        expect(service).toBeTruthy();
    });
});
