import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PageAddressesComponent } from './page-addresses.component';

describe('PageAddressesComponent', () => {
    let component: PageAddressesComponent;
    let fixture: ComponentFixture<PageAddressesComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ PageAddressesComponent ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PageAddressesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
