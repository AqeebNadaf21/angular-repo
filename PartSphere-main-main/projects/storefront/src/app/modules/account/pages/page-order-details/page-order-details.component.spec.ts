import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PageOrderDetailsComponent } from './page-order-details.component';

describe('PageOrderDetailsComponent', () => {
    let component: PageOrderDetailsComponent;
    let fixture: ComponentFixture<PageOrderDetailsComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ PageOrderDetailsComponent ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PageOrderDetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
