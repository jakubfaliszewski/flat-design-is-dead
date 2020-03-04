import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NeoCardComponent } from './standalone-components/neo-card/neo-card.component';
import { NeoCardTitleComponent } from './standalone-components/neo-card-title/neo-card-title.component';

const customComponents = [
  HomeComponent
];

const standaloneComponents = [
  NeoCardComponent,
  NeoCardTitleComponent
];

@NgModule({
  declarations: [
    AppComponent,
    customComponents,
    standaloneComponents,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
