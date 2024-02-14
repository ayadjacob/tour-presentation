import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HistoricalReadersComponent } from './components/historical-readers/historical-readers.component';
import { HeaderMenuComponent } from './components/header-menu/header-menu.component';
import { FlipIframeComponent } from './components/flip-iframe/flip-iframe.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';
import { BilingualComponent } from './components/bilingual/bilingual.component';
import { BilingualMathComponent } from './components/bilingual-math/bilingual-math.component';
import { LanguageReadersComponent } from './components/language-readers/language-readers.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HistoricalReadersComponent,
    HeaderMenuComponent,
    FlipIframeComponent,
    FooterComponent,
    BilingualComponent,
    BilingualMathComponent,
    LanguageReadersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
