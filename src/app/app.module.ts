import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    EmptyRouteComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{path: '**', component: EmptyRouteComponent}])
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
