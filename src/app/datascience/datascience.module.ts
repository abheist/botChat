import { MaterialModule } from './../core/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DataScienceRoutingModule } from './datascience.routing-module';
import { DatascienceComponent } from './datascience.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeModule } from '../shared/pipes/pipe.module';
import { IntentMapperComponent } from './intent-mapper/intent-mapper.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SelfLearningComponent } from './self-learning/self-learning.component';



@NgModule({
    declarations: [
        DatascienceComponent,
        IntentMapperComponent,
        DashboardComponent,
        SelfLearningComponent
    ],
    imports: [
        CommonModule,
        DataScienceRoutingModule,
        PipeModule,
        MaterialModule,
        FlexLayoutModule
    ]
})
export class DataScienceModule { }
