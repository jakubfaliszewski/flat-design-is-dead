import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PricingComponent } from './components/pricing/pricing.component';


const routes: Routes = [
  { path: '', component: HomeComponent, data: { name: 'home' } },
  { path: 'pricing', component: PricingComponent, data: { name: 'pricing' } },
  { path: 'pricing/:productName', component: PricingComponent, data: { name: 'pricing' } },
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
