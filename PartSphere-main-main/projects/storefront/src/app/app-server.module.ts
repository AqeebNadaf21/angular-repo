import { NgModule } from '@angular/core';

// modules (angular)
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ServerModule } from '@angular/platform-server';
// modules
import { AppModule } from './app.module';
import { LanguageServerModule } from './modules/language/language-server.module';

// components
import { AppComponent } from './app.component';


@NgModule({
    imports: [
        // modules (angular)
        NoopAnimationsModule,
        ServerModule,
        // modules
        AppModule,
        LanguageServerModule,
    ],
    bootstrap: [AppComponent],
})
export class AppServerModule {}
