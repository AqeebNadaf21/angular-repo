import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AccountMenuComponent } from './account-menu.component';

describe('AccountMenuComponent', () => {
    let component: AccountMenuComponent;
    let fixture: ComponentFixture<AccountMenuComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ AccountMenuComponent ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AccountMenuComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
