import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor () { }
  navLinks = [
    {
      label: 'DS Dashboard',
      path: 'ds'
    },
    {
      label: 'Management Dashboard',
      path: 'management'
    },
  ];

}
