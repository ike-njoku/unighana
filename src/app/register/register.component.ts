import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiGatewayService } from '../api-gateway.service';
import { CREATE_PASSWORD_REGEX } from '../constants';
import { NotificationService } from '../pop-up-notifications/notification.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly apiService: ApiGatewayService,
    private notificationService: NotificationService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
  }

  signUpForm: FormGroup = this.formBuilder.group({
    userName: [null, [Validators.required]],
    emailAddress: [null, [Validators.email, Validators.required]],
    password: [null, [Validators.required, Validators.pattern(CREATE_PASSWORD_REGEX)]],
    retypePassword: [null, [Validators.required, Validators.pattern(CREATE_PASSWORD_REGEX)]]
  })

  submitting: boolean = false;

  get userName() {
    return this.signUpForm.get('userName');
  }

  get emailAddress() {
    return this.signUpForm.get('emailAddress');
  }

  get password() {
    return this.signUpForm.get('password');
  }

  get retypePassword() {
    return this.signUpForm.get('retypePassword');
  }

  passwordMatches(pattern: string): boolean {
    return this.password?.value?.match(RegExp(pattern));
  }

  fakeLogin() {
    setTimeout(() => {

    }, 2000);
    if (this.userName?.value.includes('admin')) {
      this.notificationService.pushMessage('Successfully created your account',
      6000,
      'success'
      )
      this.submitting = false;
      setTimeout(() => {
        this.router.navigate(['/login'])
      }, 500);
    }

    else {
      this.notificationService.pushMessage('Could not create account', 5000, 'error');
      this.submitting = false;
    }
  }

  register(): void {
    this.submitting = true;
    this.fakeLogin();
    /**
     * The code below would be necessary in sending request to LIVE APIs
     *
     */
    // this.apiService.register(this.signUpForm.value)
    //   .subscribe({
    //     next: (response) => {
    //       console.log(response);
    //       this.submitting = false;
    //     },
    //     error: (error) => {
    //       this.notificationService.pushMessage('Could not create account', 5000, 'error');
    //       this.submitting = false;
    //     }
    //   })
  }
}
