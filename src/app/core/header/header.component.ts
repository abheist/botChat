import { AppService } from './../app.service';
import { HeaderService } from './header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private appService: AppService,
    private headerService: HeaderService) { }


  ngOnInit() {
    console.log("appService", this.appService);
  }

}
