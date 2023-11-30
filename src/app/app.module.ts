import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HistoricalReadersComponent } from './components/historical-readers/historical-readers.component';
import { HeaderMenuComponent } from './components/header-menu/header-menu.component';
import { FlipIframeComponent } from './components/flip-iframe/flip-iframe.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HistoricalReadersComponent,
    HeaderMenuComponent,
    FlipIframeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
