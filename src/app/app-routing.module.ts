import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HistoricalReadersComponent } from './components/historical-readers/historical-readers.component';
import { FlipIframeComponent } from './components/flip-iframe/flip-iframe.component';
import { BilingualComponent } from './components/bilingual/bilingual.component';
import { LanguageReadersGroupComponent } from './components/language-readers-group/language-readers-group.component';
import { WorldLangaugesDemoComponent } from './components/world-langauges-demo/world-langauges-demo.component';
import { LanguageReadersArabicComponent } from './components/language-readers-arabic/language-readers-arabic.component';
import { LanguageReadersFrenchComponent } from './components/language-readers-french/language-readers-french.component';
import { AcceleratedComponent } from './components/accelerated/accelerated.component';
import { MathAndScienceComponent } from './components/math-and-science/math-and-science.component';
import { ArtsAndHumanitiesComponent } from './components/arts-and-humanities/arts-and-humanities.component';
import { BilingualSpreadComponent } from './components/bilingual-spread/bilingual-spread.component';
import { BilingualMathComponent } from './components/bilingual-math/bilingual-math.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' }, // Redirect empty path to /home
  { path: 'home', component: HomeComponent },
  { path: 'historical', component: HistoricalReadersComponent },
  { path: 'worldLanguages', component: BilingualComponent },
  { path: 'worldLanguages_dm', component: WorldLangaugesDemoComponent },
  { path: 'flip', component: FlipIframeComponent },
  { path: 'bilingual', component: BilingualSpreadComponent },
  { path: 'languageReaders', component: LanguageReadersGroupComponent },
  { path: 'languageReadersArabic', component: LanguageReadersArabicComponent },
  { path: 'languageReadersFrench', component: LanguageReadersFrenchComponent },
  { path: 'accelerated', component: AcceleratedComponent },
  { path: 'mathAndscience', component: MathAndScienceComponent },
  { path: 'artsAndHumanities', component: ArtsAndHumanitiesComponent },
  { path: 'biligualMath', component: BilingualMathComponent },

  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
