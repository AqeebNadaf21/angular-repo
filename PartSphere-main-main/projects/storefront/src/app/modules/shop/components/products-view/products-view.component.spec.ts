import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProductsViewComponent } from './products-view.component';

describe('ProductsViewComponent', () => {
    let component: ProductsViewComponent;
    let fixture: ComponentFixture<ProductsViewComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ ProductsViewComponent ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ProductsViewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
