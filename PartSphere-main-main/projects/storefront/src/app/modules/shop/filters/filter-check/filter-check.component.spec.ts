import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FilterCheckComponent } from './filter-checkbox.component';

describe('FilterCheckComponent', () => {
    let component: FilterCheckComponent;
    let fixture: ComponentFixture<FilterCheckComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ FilterCheckComponent ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FilterCheckComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
