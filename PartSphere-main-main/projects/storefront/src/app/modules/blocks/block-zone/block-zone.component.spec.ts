import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BlockZoneComponent } from './block-zone.component';

describe('BlockZoneComponent', () => {
    let component: BlockZoneComponent;
    let fixture: ComponentFixture<BlockZoneComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ BlockZoneComponent ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BlockZoneComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
