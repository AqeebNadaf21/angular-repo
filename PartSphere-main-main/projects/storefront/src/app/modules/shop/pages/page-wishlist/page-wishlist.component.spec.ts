import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PageWishlistComponent } from './page-wishlist.component';

describe('PageWishlistComponent', () => {
    let component: PageWishlistComponent;
    let fixture: ComponentFixture<PageWishlistComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ PageWishlistComponent ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PageWishlistComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
