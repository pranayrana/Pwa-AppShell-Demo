import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api/http-client-in-memory-web-api.module';
import { InMemoryService } from './core/in-memory.service';
import { WelcomeComponent } from './welcome.component';
import { ContactComponent } from './contact.component';
import { NotFoundComponent } from './not-found.component';
import { LogUpdateService } from './core/log-update.service';
import { CheckUpdateService } from './core/check-update.service';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ContactComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    HttpClientInMemoryWebApiModule.forRoot(InMemoryService, { passThruUnknownUrl:true }),
  ],
  providers: [InMemoryService,LogUpdateService,CheckUpdateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
