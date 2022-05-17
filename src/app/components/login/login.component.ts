import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;
  showPassword = false;
  showVerPassword = false;

  constructor(private router : Router, private formBuilder : FormBuilder) { 
    this.loginForm = this.formBuilder.group({
       mail: ['', Validators.required ],
       pass: ['', Validators.required ],
       passVer: ['', Validators.required ]
    })
  }

  ngOnInit(): void {
  }

  togglePassword(){
    this.showPassword = !this.showPassword
  }

  toggleVerPassword(){
    this.showVerPassword = !this.showVerPassword
  }

  onSubmit(){
    if(this.loginForm.valid){
      this.router.navigate(['/dashboard']);
    }
  }
}
