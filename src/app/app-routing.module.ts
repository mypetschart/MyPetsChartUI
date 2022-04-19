import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { BreederComponent } from './onboarding/breeder/breeder.component';
import { VetComponent } from './onboarding/vet/vet.component';
import { OwnerComponent } from './onboarding/owner/owner.component';
import { LitterComponent } from './litter/litter.component';
import { DogComponent } from './dog/dog.component';
import { AllDogsComponent } from './dog/all-dogs/all-dogs.component';
import { TaskComponent } from './task/task.component';
import { SettingsComponent } from './settings/settings.component';
import { AllLittersComponent } from './litter/all-litters/all-litters.component';
import { AllTasksComponent } from './task/all-tasks/all-tasks.component';
import { MessageComponent } from './message/message.component';
import { ReportComponent } from './report/report.component';
import { ContactComponent } from './contact/contact.component';
import { AllContactsComponent } from './contact/all-contacts/all-contacts.component';

const routes: Routes = [
  // Top level pages
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'reports', component: ReportComponent },
  { path: 'messages', component: MessageComponent },
  { path: 'settings', component: SettingsComponent },

  // Sub pages and children
  { path: 'dogs', component: AllDogsComponent },
  { path: 'dogs/:id', component: DogComponent },
  { path: 'litters', component: AllLittersComponent },
  { path: 'litters/:id', component: LitterComponent },
  { path: 'tasks', component: AllTasksComponent },
  { path: 'tasks/:id', component: TaskComponent },
  { path: 'contacts', component: AllContactsComponent },
  { path: 'contacts/:id', component: ContactComponent },


  // Onboarding
  { path: 'onboarding', component: OnboardingComponent },
  { path: 'onboarding/breeder', component: BreederComponent },
  { path: 'onboarding/owner', component: OwnerComponent },
  { path: 'onboarding/vet', component: VetComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
