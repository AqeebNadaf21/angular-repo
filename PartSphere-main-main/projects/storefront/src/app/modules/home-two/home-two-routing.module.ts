import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// pages
import { PageTwoComponent } from './pages/page-two/page-two.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: PageTwoComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomeTwoRoutingModule { }
