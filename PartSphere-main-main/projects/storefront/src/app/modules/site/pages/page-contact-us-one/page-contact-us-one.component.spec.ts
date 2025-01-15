import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PageContactUsOneComponent } from './page-contact-us-one.component';

describe('PageContactUsOneComponent', () => {
    let component: PageContactUsOneComponent;
    let fixture: ComponentFixture<PageContactUsOneComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ PageContactUsOneComponent ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PageContactUsOneComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
