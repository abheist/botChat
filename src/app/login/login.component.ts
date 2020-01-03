import { LoginService } from './login.service';
import { HeaderService } from './../core/header/header.service';
import { AppService } from './../core/app.service';
import { SpinnerService } from './../core/spinner/spinner.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
    private spinnerService: SpinnerService,
    private appService: AppService,
    private headerService: HeaderService,
    private loginService: LoginService) { }
  username: string;
  showSpinnerFlag: boolean = false;
  password: string;
  showSpinner: boolean = false;
  loginFormIncorrect: boolean = false;
  ngOnInit() {
    this.headerService.showheaderSubComponents = false;
  }

  login(): void {
    if (this.username == this.loginService.dasboardLogin.username && this.password == this.loginService.dasboardLogin.password) {
      this.loginFormIncorrect = false;
      this.headerService.userRole = "dashboard";
      this.headerService.showNavLinks.push(this.headerService.dashBoardLink);
      this.router.navigate(["/ds-dashboard"]);
    }
    else if (this.username == this.loginService.managementLogin.username && this.password == this.loginService.managementLogin.password) {
      this.loginFormIncorrect = false;
      this.headerService.userRole = "management";
      this.headerService.showNavLinks.push(this.headerService.managementLink);
      this.router.navigate(["/management"]);
    }
    else {
      this.loginFormIncorrect = true;
    }
    this.appService.showSpinnerOnLoad();
  }

}
