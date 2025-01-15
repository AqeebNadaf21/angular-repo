import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BlockSpaceComponent } from './block-space.component';

describe('BlockSpaceComponent', () => {
    let component: BlockSpaceComponent;
    let fixture: ComponentFixture<BlockSpaceComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ BlockSpaceComponent ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BlockSpaceComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
