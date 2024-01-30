import { Component } from '@angular/core';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  username = '';
  password = '';

  constructor(private loginService: LoginService, private router: Router) { } // Inject the Router service

  login() {
    const user = { username: this.username, password: this.password };

    this.loginService.loginUser(user).subscribe(
      response => {
        alert(response);
        this.router.navigate(['/home']); // Navigate to the Home component upon successful login
      },
      error => {
        alert('Login failed. Please check your credentials.');
        console.error(error);
      }
    );
  }

}
