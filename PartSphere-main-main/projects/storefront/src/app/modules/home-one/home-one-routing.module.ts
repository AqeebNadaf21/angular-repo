import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// pages
import { PageOneComponent } from './pages/page-one/page-one.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: PageOneComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomeOneRoutingModule { }
