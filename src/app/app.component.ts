import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor () { }

  selectedDate = null;
  datePickerValue = null;
  defaultScore = null;
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

  activeLinks = this.navLinks[0];

}
