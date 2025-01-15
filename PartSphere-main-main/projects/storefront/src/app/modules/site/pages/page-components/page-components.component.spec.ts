import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PageComponentsComponent } from './page-components.component';

describe('PageComponentsComponent', () => {
    let component: PageComponentsComponent;
    let fixture: ComponentFixture<PageComponentsComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ PageComponentsComponent ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PageComponentsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
