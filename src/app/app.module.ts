import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavheaderComponent } from './navheader/navheader.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { SlickModule } from 'ngx-slick';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavheaderComponent,
    CarruselComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
