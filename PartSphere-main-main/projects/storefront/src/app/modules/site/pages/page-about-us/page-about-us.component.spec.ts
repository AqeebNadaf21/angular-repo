import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PageAboutUsComponent } from './page-about-us.component';

describe('PageAboutUsComponent', () => {
    let component: PageAboutUsComponent;
    let fixture: ComponentFixture<PageAboutUsComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ PageAboutUsComponent ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PageAboutUsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
