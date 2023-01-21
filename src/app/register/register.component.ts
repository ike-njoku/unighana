import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CREATE_PASSWORD_REGEX } from '../constants';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private readonly formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  signUpForm: FormGroup = this.formBuilder.group({
    userName: [null, [Validators.required]],
    emailAddress: [null, [Validators.email, Validators.required]],
    password: [null, [Validators.required, Validators.pattern(CREATE_PASSWORD_REGEX)]]
  })
}
