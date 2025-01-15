import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MobileHeaderComponent } from './mobile-header.component';

describe('MobileHeaderComponent', () => {
    let component: MobileHeaderComponent;
    let fixture: ComponentFixture<MobileHeaderComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ MobileHeaderComponent ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MobileHeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
