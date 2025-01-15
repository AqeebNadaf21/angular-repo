import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BlogSidebarComponent } from './blog-sidebar.component';

describe('BlogSidebarComponent', () => {
    let component: BlogSidebarComponent;
    let fixture: ComponentFixture<BlogSidebarComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ BlogSidebarComponent ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BlogSidebarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
