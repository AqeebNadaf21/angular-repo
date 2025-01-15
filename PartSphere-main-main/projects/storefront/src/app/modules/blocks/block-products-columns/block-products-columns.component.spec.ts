import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BlockProductsColumnsComponent } from './block-products-columns.component';

describe('BlockProductsColumnsComponent', () => {
    let component: BlockProductsColumnsComponent;
    let fixture: ComponentFixture<BlockProductsColumnsComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ BlockProductsColumnsComponent ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BlockProductsColumnsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
