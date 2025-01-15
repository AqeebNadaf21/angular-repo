import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PageCartComponent } from './page-cart.component';

describe('PageCartComponent', () => {
    let component: PageCartComponent;
    let fixture: ComponentFixture<PageCartComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ PageCartComponent ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PageCartComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
