import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PagePasswordComponent } from './page-password.component';

describe('PagePasswordComponent', () => {
    let component: PagePasswordComponent;
    let fixture: ComponentFixture<PagePasswordComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ PagePasswordComponent ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PagePasswordComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
