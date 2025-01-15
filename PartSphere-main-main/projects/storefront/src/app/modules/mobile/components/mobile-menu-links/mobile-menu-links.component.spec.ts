import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MobileMenuLinksComponent } from './mobile-menu-links.component';

describe('MobileMenuLinksComponent', () => {
    let component: MobileMenuLinksComponent;
    let fixture: ComponentFixture<MobileMenuLinksComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ MobileMenuLinksComponent ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MobileMenuLinksComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
