import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WidgetCommentsComponent } from './widget-comments.component';

describe('WidgetCommentsComponent', () => {
    let component: WidgetCommentsComponent;
    let fixture: ComponentFixture<WidgetCommentsComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ WidgetCommentsComponent ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(WidgetCommentsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
