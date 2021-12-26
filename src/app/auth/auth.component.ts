import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  error:any; 
  formData = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })    
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSignin(){
    const {email, password} = this.formData.value
    this.authService.SignIn(email, password)
    .then(() => {
      this.router.navigate([''])
    })
    .catch((error) => {this.error = error
       console.log(this.error)})
  }
  refresh(){
    setTimeout(() => {
      window.location.reload();
    }, 1)
  }
}
