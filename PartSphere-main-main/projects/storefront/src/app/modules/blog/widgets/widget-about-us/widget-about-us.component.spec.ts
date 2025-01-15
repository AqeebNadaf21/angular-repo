import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WidgetAboutUsComponent } from './widget-about-us.component';

describe('WidgetAboutUsComponent', () => {
    let component: WidgetAboutUsComponent;
    let fixture: ComponentFixture<WidgetAboutUsComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ WidgetAboutUsComponent ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(WidgetAboutUsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
