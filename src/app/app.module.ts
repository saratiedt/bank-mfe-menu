import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { PdpjLinkDirective } from './pdpj-link.directive';
import { LocationProvider } from './location.provider';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    EmptyRouteComponent,
    PdpjLinkDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{ path: '**', component: EmptyRouteComponent }])
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }, LocationProvider],
  bootstrap: [AppComponent],
})
export class AppModule { }
