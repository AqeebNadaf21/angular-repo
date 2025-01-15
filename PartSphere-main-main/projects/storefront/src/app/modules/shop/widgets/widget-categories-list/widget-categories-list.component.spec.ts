import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WidgetCategoriesListComponent } from './widget-categories-list.component';

describe('WidgetCategoriesListComponent', () => {
    let component: WidgetCategoriesListComponent;
    let fixture: ComponentFixture<WidgetCategoriesListComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ WidgetCategoriesListComponent ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(WidgetCategoriesListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
