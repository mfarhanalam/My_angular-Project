import { Component, OnInit } from '@angular/core';
import { Modal } from 'bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginForm } from '../login.interface';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registrationForm: FormGroup;
  passwordFieldType: string = 'password'; // Default type for password field
  showPassword: boolean = false;

  constructor(private formBuilder: FormBuilder, private redirect: Router) {
    this.registrationForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void { }

  submitForm()  {
    if (this.registrationForm.valid) {
      const userData = {
        name: this.registrationForm.value.name,
        email: this.registrationForm.value.email,
        password: this.registrationForm.value.password
      };
      localStorage.setItem('userData', JSON.stringify(userData));
      this.registrationForm.reset();
      this.openSuccessModal()
    }
  }
  ChangeMethod() {
    this.registrationForm.reset();
  }
 

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
    this.passwordFieldType = this.showPassword ? 'text' : 'password';
  }

  private successModal!: Modal;
  openSuccessModal() {
    const element = document.getElementById('success-modal') as any;
    this.successModal = new Modal(element);
    this.successModal.show();
  }
  closeModal() {
    this.successModal.hide()
  }
  navigateToLogin() {
    this.redirect.navigateByUrl('login');
    this.closeModal()
  }
}
