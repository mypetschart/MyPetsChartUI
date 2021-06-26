import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


// Material modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIcon, MatIconModule } from '@angular/material/icon';

// App components
import { OnboardingComponent } from './onboarding/onboarding.component';
import { DogsComponent } from './dogs/dogs.component';
import { MotherComponent } from './dogs/mother/mother.component';
import { FatherComponent } from './dogs/father/father.component';
import { LitterComponent } from './dogs/litter/litter.component';
import { PuppyComponent } from './dogs/litter/puppy/puppy.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddDogComponent } from './dogs/add-dog/add-dog.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BreederComponent } from './onboarding/breeder/breeder.component';
import { OwnerComponent } from './onboarding/owner/owner.component';
import { VetComponent } from './onboarding/vet/vet.component';


@NgModule({
  declarations: [
    AppComponent,
    OnboardingComponent,
    DogsComponent,
    MotherComponent,
    FatherComponent,
    LitterComponent,
    PuppyComponent,
    DashboardComponent,
    AddDogComponent,
    HeaderComponent,
    FooterComponent,
    BreederComponent,
    OwnerComponent,
    VetComponent
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
    ReactiveFormsModule,
    MatSelectModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
