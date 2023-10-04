import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentcardComponent } from './contentcard/contentcard.component';
import { LeftCardComponent } from './left-card/left-card.component';
 

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    NavbarComponent,
    ContentcardComponent,
    LeftCardComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
