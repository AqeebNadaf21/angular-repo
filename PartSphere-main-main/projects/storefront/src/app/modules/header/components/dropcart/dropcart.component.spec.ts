import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DropcartComponent } from './dropcart.component';

describe('DropcartComponent', () => {
    let component: DropcartComponent;
    let fixture: ComponentFixture<DropcartComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ DropcartComponent ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DropcartComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
