import { MaterialModule } from './../shared/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ManagementRoutingModule } from './management-routing-module';
import { ManagementComponent } from './management.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeModule } from '../pipes/pipe.module';



@NgModule({
  declarations: [
    ManagementComponent
  ],
  imports: [
    CommonModule,
    ManagementRoutingModule,
    PipeModule,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class ManagementModule { }
