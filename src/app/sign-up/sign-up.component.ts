import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  formData = new FormGroup({ }) 
  constructor(private authService: AuthService, private FB: FormBuilder, private router: Router) {
    this.formData = FB.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      passwordConfirm: ['', [Validators.required]]
    },
    {
      validator: this.ConfirmedValidator('password', 'passwordConfirm')
    })
  }
  ConfirmedValidator(controlName: string, matchControlName: string){
    return(formGroup:FormGroup)=>{
      const control = formGroup.controls[controlName]
      const matchingControl = formGroup.controls[matchControlName]
      if(matchingControl.errors && !matchingControl.errors['confirmedValidator']){
        return
      }
      if(control.value !== matchingControl.value){
        matchingControl.setErrors({confirmedValidator: true})
      }
      else{
        matchingControl.setErrors(null)
      }
    }
  }
  get f(){
    return this.formData.controls
  }

  ngOnInit(): void {
  }

  onSignUp(){
    const {email, password} = this.formData.value
    this.authService.SignUp(email, password)
      .then(() => {
        this.router.navigate([''])
      })
  }

  passwordMatchValidator(password: string, confirmPassword: string) {
    return (formGroup: FormGroup) => {
      const passwordControl = formGroup.controls[password];
      const confirmPasswordControl = formGroup.controls[confirmPassword];

      if (!passwordControl || !confirmPasswordControl) {
        return null;
      }

      if (
        confirmPasswordControl.errors &&
        !confirmPasswordControl.errors.passwordMismatch
      ) {
        return null;
      }

      if (passwordControl.value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({ passwordMismatch: true });
          return true;
      } else {
        confirmPasswordControl.setErrors(null);
          return null;
      }
    };
  }

}
