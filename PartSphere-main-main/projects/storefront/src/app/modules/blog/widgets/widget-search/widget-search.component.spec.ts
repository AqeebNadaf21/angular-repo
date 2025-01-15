import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WidgetSearchComponent } from './widget-search.component';

describe('WidgetSearchComponent', () => {
    let component: WidgetSearchComponent;
    let fixture: ComponentFixture<WidgetSearchComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ WidgetSearchComponent ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(WidgetSearchComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
