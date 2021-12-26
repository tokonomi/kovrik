import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { authState } from 'rxfire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentuser$ = authState(this.auth) 
  constructor(public auth: Auth) { }

  SignUp(email: string, password: string){
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  SignIn(email: string, password: string){
    return signInWithEmailAndPassword(this.auth, email, password);
  }
}
