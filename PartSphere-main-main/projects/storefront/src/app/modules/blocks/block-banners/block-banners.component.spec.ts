import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BlockBannersComponent } from './block-banners.component';

describe('BlockBannersComponent', () => {
    let component: BlockBannersComponent;
    let fixture: ComponentFixture<BlockBannersComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ BlockBannersComponent ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BlockBannersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
