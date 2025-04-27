import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent {
  loginForm: FormGroup;
  passwordFieldType: string = 'password'; // Default type for password field
  showPassword: boolean = false;
  savedUserData: any;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
    const savedUserData = localStorage.getItem('userData');
    this.savedUserData = savedUserData ? JSON.parse(savedUserData) : null;
  }

  submitForm() {
    if (this.loginForm.valid) {
      const enteredEmail = this.loginForm.value.email;
      const enteredPassword = this.loginForm.value.password;

      if (
        this.savedUserData &&
        this.savedUserData.email === enteredEmail &&
        this.savedUserData.password === enteredPassword
      ) {
        const confirmResult = confirm('You are in Jannah. Do you want to register?');
        if (confirmResult) {
          this.router.navigate(['']); // Navigate to the register page
        }
      } else {
        alert('Do Worship');
        this.loginForm.reset();
      }
    }
  }
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
    this.passwordFieldType = this.showPassword ? 'text' : 'password';
  }
}

