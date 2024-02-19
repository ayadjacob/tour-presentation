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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { LanguageReadersGroupComponent } from './components/language-readers-group/language-readers-group.component';
import { WorldLangaugesDemoComponent } from './components/world-langauges-demo/world-langauges-demo.component';


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
    LanguageReadersComponent,
    LanguageReadersGroupComponent,
    WorldLangaugesDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
