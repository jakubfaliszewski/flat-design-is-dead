import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DemoComponent } from './components/demo/demo.component';
import { PlaygroundComponent } from './components/playground/playground.component';


const routes: Routes = [
  { path: '', component: HomeComponent, data: { name: 'home', animation: 0 } },
  { path: 'pricing', component: PricingComponent, data: { name: 'pricing', animation: 1 } },
  { path: 'demo', component: DemoComponent, data: { name: 'demo', animation: 2 } },
  { path: 'playground', component: PlaygroundComponent, data: { name: 'playground', animation: 3 } },
  { path: 'notfound', component: NotFoundComponent, data: { name: 'not found', animation: 4 } },
  { path: '**', redirectTo: 'notfound' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
