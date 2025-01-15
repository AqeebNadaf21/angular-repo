import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FilterRadioComponent } from './filter-radio.component';

describe('FilterRadioComponent', () => {
    let component: FilterRadioComponent;
    let fixture: ComponentFixture<FilterRadioComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ FilterRadioComponent ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FilterRadioComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
