import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpNotificationsComponent } from './pop-up-notifications.component';

describe('PopUpNotificationsComponent', () => {
  let component: PopUpNotificationsComponent;
  let fixture: ComponentFixture<PopUpNotificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopUpNotificationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopUpNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
