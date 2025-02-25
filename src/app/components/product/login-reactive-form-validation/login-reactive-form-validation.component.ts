import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-reactive-form-validation',
  imports: [ReactiveFormsModule, NgIf,FormsModule], // Importing ReactiveFormsModule and NgIf for reactive forms and conditional display
  templateUrl: './login-reactive-form-validation.component.html',
  styleUrl: './login-reactive-form-validation.component.css',
  standalone:true
})
export class LoginReactiveFormValidationComponent implements OnInit {

  form!: FormGroup; // Defining a form property to hold the FormGroup instance
  // password:string= '';
  // confirmPassword:string= '';

  constructor(private fb: FormBuilder) {} // Injecting FormBuilder service to create form controls

  ngOnInit(): void {
    // Initializing the form and defining form controls with validation
    this.form = this.fb.group({
      name: new FormControl('', Validators.required), // Name field with 'required' validator
      email: new FormControl('', [Validators.required, Validators.email]), // Email field with 'required' and 'email' validators
      password:new FormControl('',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(/^(?=.*[A-Z])(?=.*\d).+$/) // Must contain at least one uppercase letter and one digit
        ]
      ),
      confirmPassword: new FormControl('', Validators.required),
    }); { validators: this.passwordMatchValidator};
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Form Submitted!', this.form.value); // Logging the form value if the form is valid
    }
  }

  // passwordmatch(control: AbstractControl): { [key: string]: boolean } | null {
  //   const password = control.get('password');
  //   const confirmPassword = control.get('confirmPassword');
    
  //   if (password && confirmPassword && password.value !== confirmPassword.value) {
  //     return { 'passwordsMismatch': true };
  //   }
  //   return null;
  // }
  // check this again
  passwordMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    
    if (password && confirmPassword && password.value !== confirmPassword.value) {
      return { 'passwordsMismatch': true };
    }
    return null;
  }
}
