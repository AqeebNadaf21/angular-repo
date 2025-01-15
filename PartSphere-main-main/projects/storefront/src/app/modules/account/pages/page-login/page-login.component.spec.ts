import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PageLoginComponent } from './page-login.component';

describe('PageLoginComponent', () => {
    let component: PageLoginComponent;
    let fixture: ComponentFixture<PageLoginComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ PageLoginComponent ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PageLoginComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
