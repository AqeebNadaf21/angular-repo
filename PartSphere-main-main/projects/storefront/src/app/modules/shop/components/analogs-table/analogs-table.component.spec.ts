import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AnalogsTableComponent } from './analogs-table.component';

describe('AnalogsTableComponent', () => {
    let component: AnalogsTableComponent;
    let fixture: ComponentFixture<AnalogsTableComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ AnalogsTableComponent ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AnalogsTableComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
