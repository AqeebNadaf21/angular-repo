import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PageGarageComponent } from './page-garage.component';

describe('PageGarageComponent', () => {
    let component: PageGarageComponent;
    let fixture: ComponentFixture<PageGarageComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ PageGarageComponent ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PageGarageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
