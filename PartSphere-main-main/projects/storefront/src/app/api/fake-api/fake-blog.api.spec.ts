import { TestBed } from '@angular/core/testing';

import { FakeBlogApi } from './fake-blog.api';

describe('FakeBlogApi', () => {
    let service: FakeBlogApi;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(FakeBlogApi);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
