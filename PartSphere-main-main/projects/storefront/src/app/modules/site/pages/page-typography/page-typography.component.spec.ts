import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PageTypographyComponent } from './page-typography.component';

describe('PageTypographyComponent', () => {
    let component: PageTypographyComponent;
    let fixture: ComponentFixture<PageTypographyComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ PageTypographyComponent ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PageTypographyComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
