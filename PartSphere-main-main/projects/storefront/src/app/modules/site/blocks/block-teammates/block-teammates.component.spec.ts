import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BlockTeammatesComponent } from './block-teammates.component';

describe('BlockTeammatesComponent', () => {
    let component: BlockTeammatesComponent;
    let fixture: ComponentFixture<BlockTeammatesComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ BlockTeammatesComponent ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BlockTeammatesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
