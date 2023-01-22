import { ComponentFixture, fakeAsync, flush, TestBed, tick } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { findByCss, setInput } from 'test.helper';
import { LoginComponent } from './login.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ApiGatewayService } from '../api-gateway.service';
import { throwError } from 'rxjs';
import { NotificationService } from '../pop-up-notifications/notification.service';
import { PopUpNotificationsModule } from '../pop-up-notifications/pop-up-notifications.module';


fdescribe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let mockApiService: jasmine.SpyObj<ApiGatewayService>


  const fillSignUpForm = () => {
    setInput(fixture, '#emailAddress', 'admin@admin.com');
    setInput(fixture, '#password', 'Abc123!');
  };

  beforeEach(async () => {
    mockApiService = jasmine.createSpyObj<ApiGatewayService>(
      'ApiService', ['register']
    );
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      providers: [FormBuilder, HttpClient, NotificationService],
      imports: [FormsModule, ReactiveFormsModule, HttpClientTestingModule, PopUpNotificationsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('submit button should be disabled login form is invalid', fakeAsync(() => {
    spyOn(component, 'login');
    const button = findByCss(fixture, '#submitButton');
    button.click();
    tick();

    expect(component.login).not.toHaveBeenCalled();
  }));
});
