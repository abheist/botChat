import { FileSaverModule } from 'ngx-filesaver';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PipeModule } from './pipes/pipe.module';
import { RouterModule } from '@angular/router';
import { DatascienceComponent } from './datascience/datascience.component';
import { ManagementComponent } from './management/management.component';
import appRoutes from './routerConfig';

@NgModule({
  declarations: [
    AppComponent,
    DatascienceComponent,
    ManagementComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FileSaverModule,
    PipeModule,
    RouterModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
