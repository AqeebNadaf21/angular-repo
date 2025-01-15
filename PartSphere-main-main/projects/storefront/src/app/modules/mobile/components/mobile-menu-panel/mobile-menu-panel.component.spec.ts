import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MobileMenuPanelComponent } from './mobile-menu-panel.component';

describe('MobileMenuPanelComponent', () => {
    let component: MobileMenuPanelComponent;
    let fixture: ComponentFixture<MobileMenuPanelComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ MobileMenuPanelComponent ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MobileMenuPanelComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
