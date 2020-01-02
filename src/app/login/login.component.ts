import { HeaderService } from './../shared/header/header.service';
import { AppService } from './../shared/app.service';
import { SpinnerService } from './../shared/spinner/spinner.service';
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
    private headerService: HeaderService) { }
  username: string;
  showSpinnerFlag: boolean = false;
  password: string;
  showSpinner: boolean = false;
  loginFormIncorrect: boolean = false;
  ngOnInit() {
    this.headerService.showheaderSubComponents = false;
  }

  login(): void {
    if (this.username == 'admin' && this.password == 'admin') {
      this.loginFormIncorrect = false;
      this.router.navigate(["/ds-dashboard"]);
    } else {
      this.loginFormIncorrect = true;
    }
    this.appService.showSpinnerOnLoad();
  }

}
