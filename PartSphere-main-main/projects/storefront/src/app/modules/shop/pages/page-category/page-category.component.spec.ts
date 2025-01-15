import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PageCategoryComponent } from './page-category.component';

describe('PageCategoryComponent', () => {
    let component: PageCategoryComponent;
    let fixture: ComponentFixture<PageCategoryComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ PageCategoryComponent ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PageCategoryComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
