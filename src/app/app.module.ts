import { PipeModule } from './shared/pipes/pipe.module';
import { HeaderService } from './core/header/header.service';
import { SpinnerService } from './core/spinner/spinner.service';
import { AppService } from './core/app.service';
import { MaterialModule } from './core/material/material.module';
import { SpinnerComponent } from './core/spinner/spinner.component';
import { AppRoutingModule } from './app-routing-module';
import { ManagementComponent } from './management/management.component';
import { FileSaverModule } from 'ngx-filesaver';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DatascienceComponent } from './datascience/datascience.component';
import { ManagementModule } from './management/management.module';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './core/header/header.component';

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
