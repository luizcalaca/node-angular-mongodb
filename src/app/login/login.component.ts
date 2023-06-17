import { HttpClient } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './authService';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string = '';
  password: string = '';

  constructor(private router: Router,private auth: AuthService) {}

  register() {
    this.router.navigateByUrl('/register');
  }

  login(email: string, password: string) {
    this.auth.login(email, password);
  }

}
