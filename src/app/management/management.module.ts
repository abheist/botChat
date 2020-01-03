import { MaterialModule } from './../core/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ManagementRoutingModule } from './management-routing-module';
import { ManagementComponent } from './management.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeModule } from '../shared/pipes/pipe.module';



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
