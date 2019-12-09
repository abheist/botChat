import { Routes } from '@angular/router';
import { DatascienceComponent } from './datascience/datascience.component';
import { ManagementComponent } from './management/management.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/ds', pathMatch: 'full' },
    {
        path: 'ds',
        component: DatascienceComponent
    },
    {
        path: 'management',
        component: ManagementComponent
    }
];
export default appRoutes;
