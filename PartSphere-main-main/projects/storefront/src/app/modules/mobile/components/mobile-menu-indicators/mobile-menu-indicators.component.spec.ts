import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MobileMenuIndicatorsComponent } from './mobile-menu-indicators.component';

describe('MobileMenuIndicatorsComponent', () => {
    let component: MobileMenuIndicatorsComponent;
    let fixture: ComponentFixture<MobileMenuIndicatorsComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ MobileMenuIndicatorsComponent ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MobileMenuIndicatorsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
