import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSvgComponent } from './register-svg.component';

describe('RegisterSvgComponent', () => {
  let component: RegisterSvgComponent;
  let fixture: ComponentFixture<RegisterSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterSvgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
