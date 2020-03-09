import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NeoCardComponent } from './standalone-components/neo-card/neo-card.component';
import { NeoTitleComponent } from './standalone-components/neo-title/neo-title.component';
import { NeoMenuComponent } from './standalone-components/neo-menu/neo-menu.component';
import { ShapesBackgroundComponent } from './standalone-components/shapes-background/shapes-background.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { NeoSliderComponent } from './standalone-components/neo-slider/neo-slider.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const customComponents = [
  HomeComponent,
  PricingComponent,
];

const standaloneComponents = [
  NeoCardComponent,
  NeoTitleComponent,
  NeoMenuComponent,
  NeoSliderComponent,
  ShapesBackgroundComponent
];

@NgModule({
  declarations: [
    AppComponent,
    customComponents,
    standaloneComponents,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
