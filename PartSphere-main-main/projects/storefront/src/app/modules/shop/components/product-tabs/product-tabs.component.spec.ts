import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProductTabsComponent } from './product-tabs.component';

describe('ProductTabsComponent', () => {
    let component: ProductTabsComponent;
    let fixture: ComponentFixture<ProductTabsComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ ProductTabsComponent ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ProductTabsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
