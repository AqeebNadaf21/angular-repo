import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BlockPostsCarouselComponent } from './block-posts-carousel.component';

describe('BlockPostsCarouselComponent', () => {
    let component: BlockPostsCarouselComponent;
    let fixture: ComponentFixture<BlockPostsCarouselComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ BlockPostsCarouselComponent ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BlockPostsCarouselComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
