import { SpinnerService } from './spinner/spinner.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  showSpinner = false;
  constructor(private spinnerService: SpinnerService) { }

  showSpinnerOnLoad() {
    this.spinnerService.showSpinner = true;
    setTimeout(() => {
      this.spinnerService.showSpinner = false;
    }, 1000);
  }
}
