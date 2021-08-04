import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


// Material modules
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDialogModule } from '@angular/material/dialog';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';


// App components
import { OnboardingComponent } from './onboarding/onboarding.component';
import { DogComponent } from './dog/dog.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddDogComponent } from './dog/add-dog/add-dog.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BreederComponent } from './onboarding/breeder/breeder.component';
import { OwnerComponent } from './onboarding/owner/owner.component';
import { VetComponent } from './onboarding/vet/vet.component';
import { MatErrorDirective } from './mat-error.directive';
import { WormingRecordComponent } from './dog/worming-record/worming-record.component';
import { VaccinationRecordComponent } from './dog/vaccination-record/vaccination-record.component';
import { MedicationRecordComponent } from './dog/medication-record/medication-record.component';
import { LitterComponent } from './litter/litter.component';
import { AddLitterComponent } from './litter/add-litter/add-litter.component';
import { SingleDogComponent } from './dog/single-dog/single-dog.component';
import { SingleLitterComponent } from './litter/single-litter/single-litter.component';
import { TaskComponent } from './dog/task/task.component';
import { SingleTaskComponent } from './dog/task/single-task/single-task.component';
import { AddTaskComponent } from './dog/task/add-task/add-task.component';
import { AllDogsComponent } from './dog/all-dogs/all-dogs.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { BellComponent } from './notifications/bell/bell.component';
import { SettingsComponent } from './settings/settings.component';
import { AllLittersComponent } from './litter/all-litters/all-litters.component';
import { AllTasksComponent } from './dog/task/all-tasks/all-tasks.component';
import { ContactComponent } from './contact/contact.component';
import { ReportComponent } from './report/report.component';
import { MessageComponent } from './message/message.component';
import { StoreModule } from '@ngrx/store';
import { DefaultDataServiceConfig, EntityDataModule } from '@ngrx/data';
import { entityConfig, defaultDataServiceConfig } from './state/entities';
import { EffectsModule } from '@ngrx/effects';


@NgModule({
  declarations: [
    AppComponent,
    OnboardingComponent,
    DogComponent,
    LitterComponent,
    DashboardComponent,
    AddDogComponent,
    HeaderComponent,
    FooterComponent,
    BreederComponent,
    OwnerComponent,
    VetComponent,
    MatErrorDirective,
    WormingRecordComponent,
    VaccinationRecordComponent,
    MedicationRecordComponent,
    AddLitterComponent,
    SingleDogComponent,
    SingleLitterComponent,
    TaskComponent,
    SingleTaskComponent,
    AddTaskComponent,
    AllDogsComponent,
    SidenavComponent,
    NotificationsComponent,
    BellComponent,
    SettingsComponent,
    AllLittersComponent,
    AllTasksComponent,
    ContactComponent,
    ReportComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatSelectModule,
    HttpClientModule,
    FontAwesomeModule,
    MatDialogModule,
    NgxMatSelectSearchModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatExpansionModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot(entityConfig),
  ],
  providers: [{ provide: DefaultDataServiceConfig, useValue: defaultDataServiceConfig }],
  bootstrap: [AppComponent]
})
export class AppModule { }
