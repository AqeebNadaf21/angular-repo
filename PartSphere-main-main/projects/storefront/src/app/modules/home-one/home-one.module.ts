import { NgModule } from '@angular/core';

// modules (angular)
import { CommonModule } from '@angular/common';
// modules (third-party)
import { TranslateModule } from '@ngx-translate/core';
// modules
import { BlocksModule } from '../blocks/blocks.module';
import { HomeOneRoutingModule } from './home-one-routing.module';
import { SharedModule } from '../shared/shared.module';

// pages
import { PageOneComponent } from './pages/page-one/page-one.component';

@NgModule({
    declarations: [
        // pages
        PageOneComponent,
    ],
    imports: [
        // modules (angular)
        CommonModule,
        // modules (third-party)
        TranslateModule.forChild(),
        // modules
        BlocksModule,
        HomeOneRoutingModule,
        SharedModule,
    ],
})
export class HomeOneModule { }
