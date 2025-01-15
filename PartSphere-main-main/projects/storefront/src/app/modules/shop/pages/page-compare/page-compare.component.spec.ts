import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PageCompareComponent } from './page-compare.component';

describe('PageCompareComponent', () => {
    let component: PageCompareComponent;
    let fixture: ComponentFixture<PageCompareComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ PageCompareComponent ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PageCompareComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
