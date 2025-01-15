import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DecorComponent } from './decor.component';

describe('DecorComponent', () => {
    let component: DecorComponent;
    let fixture: ComponentFixture<DecorComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ DecorComponent ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DecorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
