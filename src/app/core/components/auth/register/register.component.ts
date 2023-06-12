import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  registerForm!: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder) { 

  }

  ngOnInit() {    
    this.registerForm = this.formBuilder.group({
      email: ['', Validators.required, Validators.email],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[A-Z]).{8,}$/)]],
      confirmPassword: ['', Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[A-Z]).{8,}$/)]
    });

    this.registerForm.valueChanges.subscribe( () => {
      console.log("Values changed");
    });
  }

  goToLogin() {
    this.router.navigateByUrl('/auth/login');
  }

  onRegisterFormSubmit() {
    //TODO
    console.log("boton submit hace cosas");
  }

}
