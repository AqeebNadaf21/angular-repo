import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WidgetFiltersComponent } from './widget-filters.component';

describe('WidgetFiltersComponent', () => {
    let component: WidgetFiltersComponent;
    let fixture: ComponentFixture<WidgetFiltersComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ WidgetFiltersComponent ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(WidgetFiltersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
