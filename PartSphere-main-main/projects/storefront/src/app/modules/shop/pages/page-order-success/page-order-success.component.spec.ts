import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PageOrderSuccessComponent } from './page-order-success.component';

describe('PageOrderSuccessComponent', () => {
    let component: PageOrderSuccessComponent;
    let fixture: ComponentFixture<PageOrderSuccessComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ PageOrderSuccessComponent ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PageOrderSuccessComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
