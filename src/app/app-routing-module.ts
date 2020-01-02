import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatascienceComponent } from './datascience/datascience.component';
import { ManagementComponent } from './management/management.component';


/**
 * @description lazy loading management modules
 */
const routes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'ds-dashboard',
        loadChildren: () => import('../app/datascience/datascience.module').then(mod => mod.DataScienceModule)
    },
    {
        path: 'management',
        loadChildren: () => import('../app/management/management.module').then(mod => mod.ManagementModule)
    }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }