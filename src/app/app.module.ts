import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
import { AddToBasketModalComponent } from './standalone-components/add-to-basket-modal/add-to-basket-modal.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DemoComponent } from './components/demo/demo.component';
import { PlaygroundComponent } from './components/playground/playground.component';
import { TitleComponent } from './components/playground/title/title.component';
import { IllustrationComponent } from './components/playground/illustration/illustration.component';

const customComponents = [
  HomeComponent,
  PricingComponent,
  DemoComponent,
  NotFoundComponent,
  PlaygroundComponent,
];

const standaloneComponents = [
  NeoCardComponent,
  NeoTitleComponent,
  NeoMenuComponent,
  NeoSliderComponent,
  AddToBasketModalComponent,
  ShapesBackgroundComponent,
  // PLAYGROUND
  TitleComponent,
  IllustrationComponent,
];

@NgModule({
  declarations: [
    AppComponent,
    customComponents,
    standaloneComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
