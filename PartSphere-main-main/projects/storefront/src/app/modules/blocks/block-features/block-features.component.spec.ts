import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BlockFeaturesComponent } from './block-features.component';

describe('BlockFeaturesComponent', () => {
    let component: BlockFeaturesComponent;
    let fixture: ComponentFixture<BlockFeaturesComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ BlockFeaturesComponent ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BlockFeaturesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
