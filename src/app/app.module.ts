import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IvyCarouselModule } from 'angular-responsive-carousel';

// State
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import * as userProfile from './_state/user/user.reducers';



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
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatChipsModule } from '@angular/material/chips';
import { MatBadgeModule } from '@angular/material/badge';
import { MatProgressBarModule } from '@angular/material/progress-bar';

// Charts
import { NgxChartsModule } from '@swimlane/ngx-charts';


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
import { TaskComponent } from './task/task.component';
import { SingleTaskComponent } from './task/single-task/single-task.component';
import { AddTaskComponent } from './task/add-task/add-task.component';
import { AllDogsComponent } from './dog/all-dogs/all-dogs.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { NotificationsComponent } from './header/notifications/notifications.component';
import { SettingsComponent } from './settings/settings.component';
import { AllLittersComponent } from './litter/all-litters/all-litters.component';
import { AllTasksComponent } from './task/all-tasks/all-tasks.component';
import { ContactComponent } from './contact/contact.component';
import { ReportComponent } from './report/report.component';
import { MessageComponent } from './message/message.component';
import { StoreModule } from '@ngrx/store';
import { DefaultDataServiceConfig, EntityDataModule } from '@ngrx/data';
import { entityConfig, defaultDataServiceConfig } from './_state/entities';
import { EffectsModule } from '@ngrx/effects';
import { WidgetsComponent } from './dashboard/widgets/widgets.component';
import { ProfileComponent } from './sidenav/profile/profile.component';
import { UserEffects } from './_state/user/user.effects';
import { AllContactsComponent } from './contact/all-contacts/all-contacts.component';
import { SingleContactComponent } from './contact/single-contact/single-contact.component';
import { DeleteLitterComponent } from './litter/delete-litter/delete-litter.component';
import { SingleNotificationComponent } from './header/notifications/single-notification/single-notification.component';
import { SearchComponent } from './header/search/search.component';
import { DamComponent } from './dog/dam/dam.component';
import { SireComponent } from './dog/sire/sire.component';
import { PuppyComponent } from './dog/puppy/puppy.component';
import { SidenavService } from './_services/sidenav.service';
import { ChartComponent } from './chart/chart.component';
import { FileUploadComponent } from './file-upload/file-upload.component';


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
    SettingsComponent,
    AllLittersComponent,
    AllTasksComponent,
    ContactComponent,
    ReportComponent,
    MessageComponent,
    WidgetsComponent,
    ProfileComponent,
    AllContactsComponent,
    SingleContactComponent,
    DeleteLitterComponent,
    SingleNotificationComponent,
    SearchComponent,
    DamComponent,
    SireComponent,
    PuppyComponent,
    ChartComponent,
    FileUploadComponent
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
    MatSnackBarModule,
    IvyCarouselModule,
    MatChipsModule,
    MatBadgeModule,
    NgxChartsModule,
    MatProgressBarModule,
    StoreModule.forRoot({user: userProfile.reducer}),
    EffectsModule.forRoot([UserEffects]),
    EntityDataModule.forRoot(entityConfig),
    StoreDevtoolsModule.instrument({ }),
  ],
  providers: [SidenavService, { provide: DefaultDataServiceConfig, useValue: defaultDataServiceConfig }],
  bootstrap: [AppComponent]
})
export class AppModule { }
