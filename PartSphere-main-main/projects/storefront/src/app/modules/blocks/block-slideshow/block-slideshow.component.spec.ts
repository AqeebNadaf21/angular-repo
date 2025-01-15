import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BlockSlideshowComponent } from './block-slideshow.component';

describe('BlockSlideshowComponent', () => {
    let component: BlockSlideshowComponent;
    let fixture: ComponentFixture<BlockSlideshowComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ BlockSlideshowComponent ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BlockSlideshowComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
