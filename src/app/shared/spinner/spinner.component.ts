import { SpinnerService } from './spinner.service';
import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {
  // @Input() showSpinner: boolean;
  constructor(private spinnerService: SpinnerService) { }

  ngOnInit() {
  }


}
