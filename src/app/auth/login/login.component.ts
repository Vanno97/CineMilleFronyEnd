import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NgIf, NgStyle} from '@angular/common';
import {Router} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {LoginRequest} from '../../../dto/login-request';
import {AuthService} from '../../../service/auth.service';
import {AlertComponent} from '../../../common-component/alert/alert.component';

@Component({
  selector: 'app-login',
  imports: [
    NgStyle,
    FormsModule,
    AlertComponent,
    NgIf
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginRequest = new LoginRequest();

  showAlert = false;
  alertMessage = "";

  constructor(private router: Router, private authService: AuthService) {
  }

  ngOnInit() {
    if (localStorage.getItem("token")) {
      this.authService.validate(localStorage.getItem("token")!).subscribe({
        next: data => {
          this.router.navigate(['/programmazione']);
        }
      });
    }
  }

  login() {
    this.authService.login(this.loginRequest).subscribe({
      next: data => {
        console.log(data);
        localStorage.setItem("token", data.token);
        this.router.navigate(['/programmazione']);
      },
      error: err => {this.showErrorAlert(err)}
    });
  }

  showErrorAlert(err: any) {
    this.showAlert = true;
    if (typeof err == "string") {
      this.alertMessage = err;
    } else {
      this.alertMessage = err.error.errorMessage;
    }
    setTimeout(() => {
      this.showAlert = false;
      this.alertMessage = "";
    }, 1000);
  }
}
