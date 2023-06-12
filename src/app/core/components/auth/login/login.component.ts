import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder, private authService: AuthService) {}

  ngOnInit() {
    console.log("init");
    this.buildLoginForm();
  }

  buildLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*\d).{8,}$/)]]
    });
  }

  goToRegister() {
    this.router.navigateByUrl('/auth/register');
  }

  onLoginFormSubmit() {
    if (this.loginForm.invalid) {
      // Handle invalid form submission (e.g., show error messages)
      return;
    }
  
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;
  
    console.log(email + " " + password);
    this.authService.SignIn(email, password, '/dashboard');
  }
  
}





