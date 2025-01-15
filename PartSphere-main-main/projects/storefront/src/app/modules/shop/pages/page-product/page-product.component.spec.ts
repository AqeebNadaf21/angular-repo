import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PageProductComponent } from './page-product.component';

describe('PageProductComponent', () => {
    let component: PageProductComponent;
    let fixture: ComponentFixture<PageProductComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ PageProductComponent ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PageProductComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
