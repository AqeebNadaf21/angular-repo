import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BlockReviewsComponent } from './block-reviews.component';

describe('BlockReviewsComponent', () => {
    let component: BlockReviewsComponent;
    let fixture: ComponentFixture<BlockReviewsComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ BlockReviewsComponent ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BlockReviewsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
