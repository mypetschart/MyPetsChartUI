import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { OnboardingService } from '../onboarding.service';
import { fadeIn } from 'src/app/transition-animations';

// The interface that describes the breeder user type
export interface Breeder {
  id?: number;
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
  breederOnboardingFormGroup1 = new FormGroup({
    fullName: new FormControl(''),
    businessName: new FormControl(''),
    handle: new FormControl(''),
  });

  breederOnboardingFormGroup2 = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl(''),
    password: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    })
  });

  // TODO the password hide stuff submits for the form for some reason
  passwordHide = true;

  emailErrorMessage(): string {
    if (this.breederOnboardingFormGroup2.hasError('required')) {
      return 'You must enter a value';
    }

    return this.breederOnboardingFormGroup2.hasError('email') ? 'Not a valid email' : '';
  }
  /*
   * END form configuration
   */

  constructor(private onboardService: OnboardingService, private _formBuilder: FormBuilder) {  }

  ngOnInit(): void {
    // this.breederOnboardingFormGroup1 = this._formBuilder.group({
    //   firstCtrl: ['', Validators.required]
    // });
    // this.breederOnboardingFormGroup2 = this._formBuilder.group({
    //   secondCtrl: ['', Validators.required]
    // });
  }

  onSubmit(formStep1: FormGroup, formStep2: FormGroup): void{
    console.log('submitted');
    if (this.validateForm(formStep1)) {

      const breederForm = {
        id: 0,
        name: 'hi',
        test: 'test'
      };

      this.onboardService.onboardBreeder(breederForm).subscribe(

      );
    }
  }

  // TODO validate form
  validateForm(form: FormGroup): boolean{
   return true;
  }

}
