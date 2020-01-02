import { HeaderService } from './header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private headerService: HeaderService) { }
  navLinks = [
    {
      label: 'DS Dashboard',
      path: 'ds-dashboard'
    },
    {
      label: 'Management Dashboard',
      path: 'management'
    },
  ];

  ngOnInit() {
  }

}
