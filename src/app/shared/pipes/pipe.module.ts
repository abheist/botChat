import { NgModule } from '@angular/core';

import { SafePipe } from './safe-url.pipe';



@NgModule({
  declarations: [SafePipe],
  imports: [
  ],
  exports: [SafePipe]
})
export class PipeModule { }
