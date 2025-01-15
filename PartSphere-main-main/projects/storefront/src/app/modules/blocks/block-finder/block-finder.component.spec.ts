import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BlockFinderComponent } from './block-finder.component';

describe('BlockFinderComponent', () => {
    let component: BlockFinderComponent;
    let fixture: ComponentFixture<BlockFinderComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ BlockFinderComponent ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BlockFinderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
