import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }



  onSubmit() {
    if (this.loginForm.value.username === 'admin' &&
      this.loginForm.value.password === '123456'
    ) {
      this.router.navigate(['/admin-panel/dashboard']);

    } else {
      alert('Fallo de autenticacion')
    }
  }

}
