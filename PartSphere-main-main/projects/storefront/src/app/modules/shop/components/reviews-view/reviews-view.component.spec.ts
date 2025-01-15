import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ReviewsViewComponent } from './reviews-view.component';

describe('ReviewsViewComponent', () => {
    let component: ReviewsViewComponent;
    let fixture: ComponentFixture<ReviewsViewComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ ReviewsViewComponent ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ReviewsViewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
