import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BlockSaleComponent } from './block-sale.component';

describe('BlockSaleComponent', () => {
    let component: BlockSaleComponent;
    let fixture: ComponentFixture<BlockSaleComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ BlockSaleComponent ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BlockSaleComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
