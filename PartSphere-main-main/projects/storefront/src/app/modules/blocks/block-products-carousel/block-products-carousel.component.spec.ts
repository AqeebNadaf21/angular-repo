import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BlockProductsCarouselComponent } from './block-products-carousel.component';

describe('BlockProductsCarouselComponent', () => {
    let component: BlockProductsCarouselComponent;
    let fixture: ComponentFixture<BlockProductsCarouselComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ BlockProductsCarouselComponent ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BlockProductsCarouselComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
