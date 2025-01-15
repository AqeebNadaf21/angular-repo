import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WidgetPostsComponent } from './widget-posts.component';

describe('WidgetPostsComponent', () => {
    let component: WidgetPostsComponent;
    let fixture: ComponentFixture<WidgetPostsComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ WidgetPostsComponent ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(WidgetPostsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
