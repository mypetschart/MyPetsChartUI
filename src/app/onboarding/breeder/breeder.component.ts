import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { OnboardingService } from '../onboarding.service';
import { fadeIn } from 'src/app/transition-animations';
import { faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';


// The interface that describes the breeder user type
export interface Breeder {
  id: number;
  name: string;
}

@Component({
  selector: 'app-breeder',
  templateUrl: './breeder.component.html',
  styleUrls: ['./breeder.component.scss'],
  animations: [
   fadeIn
  ]
})
export class BreederComponent implements OnInit {
  /*
   * Form configuration
   */
  fullName = new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(120)]);
  businessName = new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(120)]);
  handle = new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(18)]);

  email = new FormControl('', [Validators.required, Validators.email]);
  phone = new FormControl('', [Validators.required, Validators.pattern('[- +()0-9]+'), Validators.minLength(7), Validators.maxLength(11)]);
  password = new FormControl('', [Validators.required, Validators.minLength(12), Validators.maxLength(120)]);

  street = new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(120)]);
  city = new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(120)]);
  state = new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(120)]);
  zip = new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(18)]);

  breederOnboardingForm = new FormGroup({
    fullName: this.fullName,
    businessName: this.businessName,
    handle: this.handle,
    email: this.email,
    phone: this.phone,
    password: this.password,
    address: new FormGroup({
      street: this.street,
      city: this.city,
      state: this.state,
      zip: this.zip
    })
  });

  // breederOnboardingFormGroup1 = new FormGroup({
  //   fullName: this.fullName,
  //   businessName: this.businessName,
  //   handle: this.handle,
  // });

  // breederOnboardingFormGroup2 = new FormGroup({
  //   email: this.email,
  //   phone: this.phone,
  //   password: this.password,
  //   address: new FormGroup({
  //     street: this.street,
  //     city: this.city,
  //     state: this.state,
  //     zip: this.zip
  //   })
  // });

  // TODO the password hide stuff submits for the form for some reason
  passwordHide = true;

  /*
   * END form configuration
   */

  faAngleDoubleLeft = faAngleDoubleLeft;
  faAngleDoubleRight = faAngleDoubleRight;

  constructor(private onboardService: OnboardingService, private _formBuilder: FormBuilder) {  }

  ngOnInit(): void { }

  onSubmit(formStep1: FormGroup, formStep2: FormGroup): void{
    console.log('submitted');

    const breederForm = {
      id: 0,
      name: 'hi',
      test: 'test'
    };

    this.onboardService.onboardBreeder(breederForm).subscribe(

    );
  }
}
