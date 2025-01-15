import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WidgetTagsComponent } from './widget-tags.component';

describe('WidgetTagsComponent', () => {
    let component: WidgetTagsComponent;
    let fixture: ComponentFixture<WidgetTagsComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ WidgetTagsComponent ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(WidgetTagsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
