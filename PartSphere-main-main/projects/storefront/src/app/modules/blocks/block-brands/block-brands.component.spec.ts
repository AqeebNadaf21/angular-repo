import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BlockBrandsComponent } from './block-brands.component';

describe('BlockBrandsComponent', () => {
    let component: BlockBrandsComponent;
    let fixture: ComponentFixture<BlockBrandsComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ BlockBrandsComponent ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BlockBrandsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
