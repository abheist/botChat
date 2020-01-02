import { HeaderService } from './shared/header/header.service';
import { SpinnerService } from './shared/spinner/spinner.service';
import { AppService } from './shared/app.service';
import { MaterialModule } from './shared/material/material.module';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { AppRoutingModule } from './app-routing-module';
import { ManagementComponent } from './management/management.component';
import { FileSaverModule } from 'ngx-filesaver';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PipeModule } from './pipes/pipe.module';
import { DatascienceComponent } from './datascience/datascience.component';
import { ManagementModule } from './management/management.module';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './shared/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SpinnerComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FileSaverModule,
    AppRoutingModule
  ],
  providers: [AppService, SpinnerService, HeaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
