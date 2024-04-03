import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LanguageReadersGroupComponent } from './components/language-readers-group/language-readers-group.component';
import { WorldLangaugesDemoComponent } from './components/world-langauges-demo/world-langauges-demo.component';
import { LanguageReadersComponent } from './components/language-readers/language-readers.component';
import { LanguageReadersArabicComponent } from './components/language-readers-arabic/language-readers-arabic.component';
import { LanguageReadersFrenchComponent } from './components/language-readers-french/language-readers-french.component';
import { AcceleratedComponent } from './components/accelerated/accelerated.component';
import { AcceleratedSliderComponent } from "./components/accelerated-slider/accelerated-slider.component";
import { MathAndScienceComponent } from './components/math-and-science/math-and-science.component';
import { ArtsAndHumanitiesComponent } from './components/arts-and-humanities/arts-and-humanities.component';

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
        LanguageReadersGroupComponent,
        WorldLangaugesDemoComponent,
        AcceleratedComponent,
        MathAndScienceComponent,
        ArtsAndHumanitiesComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        LanguageReadersComponent,
        LanguageReadersArabicComponent,
        LanguageReadersFrenchComponent,
        AcceleratedSliderComponent
    ]
})
export class AppModule {}
