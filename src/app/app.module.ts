import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import {appRoutes} from './app.routing';
import {SharedModule} from './shared/shared.module';
import {HackernewsService} from './shared/service/hackernews.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      {scrollPositionRestoration: 'enabled'}
    ),
    SharedModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
