import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
loginForm: any;
  
  constructor(private router : Router){

  }
  
  goToRegister() {
    this.router.navigateByUrl('/auth/register');
  }

  login() {

  }
}
