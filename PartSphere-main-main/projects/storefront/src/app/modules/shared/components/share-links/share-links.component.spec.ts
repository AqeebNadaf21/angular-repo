import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ShareLinksComponent } from './share-links.component';

describe('ShareLinksComponent', () => {
    let component: ShareLinksComponent;
    let fixture: ComponentFixture<ShareLinksComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ ShareLinksComponent ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ShareLinksComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
