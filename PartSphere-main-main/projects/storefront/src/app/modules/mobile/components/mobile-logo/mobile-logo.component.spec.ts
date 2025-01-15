import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MobileLogoComponent } from './mobile-logo.component';

describe('MobileLogoComponent', () => {
  let component: MobileLogoComponent;
  let fixture: ComponentFixture<MobileLogoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileLogoComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
