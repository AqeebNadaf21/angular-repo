import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WidgetCategoriesComponent } from './widget-categories.component';

describe('WidgetCategoriesComponent', () => {
    let component: WidgetCategoriesComponent;
    let fixture: ComponentFixture<WidgetCategoriesComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ WidgetCategoriesComponent ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(WidgetCategoriesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
