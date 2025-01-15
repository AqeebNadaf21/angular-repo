import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { VehicleSelectComponent } from './vehicle-select.component';

describe('VehicleSelectComponent', () => {
    let component: VehicleSelectComponent;
    let fixture: ComponentFixture<VehicleSelectComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ VehicleSelectComponent ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(VehicleSelectComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
