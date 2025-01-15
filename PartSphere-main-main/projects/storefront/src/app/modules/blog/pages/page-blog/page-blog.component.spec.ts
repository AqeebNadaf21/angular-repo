import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PageBlogComponent } from './page-blog.component';

describe('PageBlogComponent', () => {
    let component: PageBlogComponent;
    let fixture: ComponentFixture<PageBlogComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ PageBlogComponent ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PageBlogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
