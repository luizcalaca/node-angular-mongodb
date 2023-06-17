import { Component } from '@angular/core';
import { AuthService } from '../login/authService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  email: string = '';
  password: string = '';

  constructor(public auth: AuthService){}
}
