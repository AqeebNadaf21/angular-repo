import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MegamenuComponent } from './megamenu.component';

describe('MegamenuComponent', () => {
    let component: MegamenuComponent;
    let fixture: ComponentFixture<MegamenuComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ MegamenuComponent ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MegamenuComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
