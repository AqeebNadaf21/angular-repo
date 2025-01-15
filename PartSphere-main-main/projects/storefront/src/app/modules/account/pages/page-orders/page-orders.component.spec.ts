import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PageOrdersComponent } from './page-orders.component';

describe('PageOrdersComponent', () => {
    let component: PageOrdersComponent;
    let fixture: ComponentFixture<PageOrdersComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ PageOrdersComponent ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PageOrdersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
