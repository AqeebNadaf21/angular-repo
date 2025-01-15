import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MobileMenuSettingsComponent } from './mobile-menu-settings.component';

describe('MobileMenuSettingsComponent', () => {
    let component: MobileMenuSettingsComponent;
    let fixture: ComponentFixture<MobileMenuSettingsComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ MobileMenuSettingsComponent ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MobileMenuSettingsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
