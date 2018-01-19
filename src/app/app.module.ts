import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule, Routes } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

import { StorageService } from '../services/storage.service';
import { GameService } from '../services/game.service';

import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil.component';
import { MainComponent } from './main.component';
import { NextPlayerComponent } from './next-player.component';
import { SettingsComponent } from './settings.component';
import { ResultComponent } from './result.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { FamilyToStringPipe } from './family-to-string.pipe';
import { SexeToStringPipe } from './sexe-to-string.pipe';

const appRoutes: Routes = [
  {
    path: 'accueil',
    component: AccueilComponent
  },
  {
    path: 'next',
    component: NextPlayerComponent 
  },
  {
    path: 'main',
    component: MainComponent 
  },
  {
    path: 'parametres',
    component: SettingsComponent 
  },
  {
    path: 'resultats',
    component: ResultComponent 
  },
  { path: '',
    redirectTo: '/accueil',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    PageNotFoundComponent,
    AppComponent,
    AccueilComponent,
    NextPlayerComponent,
    MainComponent,
    ResultComponent,
    SettingsComponent,
    FamilyToStringPipe,
    SexeToStringPipe,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatListModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [ StorageService, GameService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
