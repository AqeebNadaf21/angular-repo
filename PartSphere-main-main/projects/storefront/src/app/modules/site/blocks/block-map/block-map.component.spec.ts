import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BlockMapComponent } from './block-map.component';

describe('BlockMapComponent', () => {
    let component: BlockMapComponent;
    let fixture: ComponentFixture<BlockMapComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ BlockMapComponent ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BlockMapComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
