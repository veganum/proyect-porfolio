import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (
      this.loginForm.value.username === 'admin' &&
      this.loginForm.value.password === '123456'
    ) {
      // console.log('El usuario puede acceder');
      this.router.navigate(['/admin-panel/dashboard']);
    } else {
      // console.log('Fallo de autenticacion');
      alert('Fallo de autenticacion');
    }
  }
}
