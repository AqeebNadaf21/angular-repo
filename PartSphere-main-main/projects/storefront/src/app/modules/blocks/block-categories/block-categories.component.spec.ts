import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BlockCategoriesComponent } from './block-categories.component';

describe('BlockCategoriesComponent', () => {
    let component: BlockCategoriesComponent;
    let fixture: ComponentFixture<BlockCategoriesComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ BlockCategoriesComponent ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BlockCategoriesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
