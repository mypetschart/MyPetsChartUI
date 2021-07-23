import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { BreederComponent } from './onboarding/breeder/breeder.component';
import { VetComponent } from './onboarding/vet/vet.component';
import { OwnerComponent } from './onboarding/owner/owner.component';
import { LittersComponent } from './litters/litters.component';

const routes: Routes = [
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'current-litters', component: LittersComponent },
  { path: 'upcoming-litters', component: LittersComponent },
  { path: 'onboarding', component: OnboardingComponent },
  { path: 'onboarding/breeder', component: BreederComponent },
  { path: 'onboarding/owner', component: OwnerComponent },
  { path: 'onboarding/vet', component: VetComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
