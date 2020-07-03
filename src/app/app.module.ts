import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// rutas
import { rootRouterConfig } from './app.routing';

// Toast
import { ToastrModule } from 'ngx-toastr';

// Interceptors
import { httpInterceptorProviders } from './core/interceptors';

import { LoginModule } from './login/login.module';
import { InicioPanelModule } from './inicio-panel/inicio-panel.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    RouterModule.forRoot(rootRouterConfig, { useHash: false }),
    LoginModule,
    InicioPanelModule
  ],
  providers: [
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
