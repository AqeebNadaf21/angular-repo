import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProductTabComponent } from './product-tab.component';

describe('ProductTabComponent', () => {
    let component: ProductTabComponent;
    let fixture: ComponentFixture<ProductTabComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ ProductTabComponent ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ProductTabComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
