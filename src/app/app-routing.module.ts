import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HistoricalReadersComponent } from './components/historical-readers/historical-readers.component';
import { FlipIframeComponent } from './components/flip-iframe/flip-iframe.component';
import { BilingualComponent } from './components/bilingual/bilingual.component';
import { BilingualMathComponent } from './components/bilingual-math/bilingual-math.component';
import { LanguageReadersGroupComponent } from './components/language-readers-group/language-readers-group.component';
import { WorldLangaugesDemoComponent } from './components/world-langauges-demo/world-langauges-demo.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect empty path to /home
  { path: 'home', component: HomeComponent },
  { path: 'historical', component: HistoricalReadersComponent },
  { path: 'worldLanguages', component: BilingualComponent },
  { path: 'worldLanguages_dm', component: WorldLangaugesDemoComponent },
  { path: 'cabeza', component: FlipIframeComponent },
  { path: 'bilingualMath', component: BilingualMathComponent },
  { path: 'languageReaders', component: LanguageReadersGroupComponent },
  
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
