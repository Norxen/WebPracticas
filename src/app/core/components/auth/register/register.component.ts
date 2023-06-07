import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  registerForm: any = {}; // Initialize an empty object to store form data

  constructor(private router: Router) {}

  goToLogin() {
    this.router.navigateByUrl('/auth/login');
  }

  register() {
    // Handle the registration logic using the data from this.registerForm
    console.log('Register form data:', this.registerForm);
    // You can send the data to an authentication service or perform any other necessary actions
  }

}
