import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FilterRangeComponent } from './filter-range.component';

describe('FilterRangeComponent', () => {
    let component: FilterRangeComponent;
    let fixture: ComponentFixture<FilterRangeComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ FilterRangeComponent ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FilterRangeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
