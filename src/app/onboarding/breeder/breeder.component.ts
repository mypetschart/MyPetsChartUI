import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OnboardingService } from '../onboarding.service';

// The interface that describes the breeder user type
export interface Breeder {
  id?: number;
  name: string;
}

@Component({
  selector: 'app-breeder',
  templateUrl: './breeder.component.html',
  styleUrls: ['./breeder.component.scss']
})
export class BreederComponent implements OnInit {
  /*
   * Form configuration
   */
  breederOnboardingForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl(''),
    password: new FormControl(''),
    fullName: new FormControl(''),
    businessName: new FormControl(''),
    handle: new FormControl(''),
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
    if (this.breederOnboardingForm.hasError('required')) {
      return 'You must enter a value';
    }

    return this.breederOnboardingForm.hasError('email') ? 'Not a valid email' : '';
  }
  /*
   * END form configuration
   */

  constructor(private onboardService: OnboardingService) { }

  ngOnInit(): void {
  }

  onSubmit(form: FormGroup): void{
    console.log('submitted');
    if (this.validateForm(form)) {

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
