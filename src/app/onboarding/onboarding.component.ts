import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss']
})
export class OnboardingComponent implements OnInit {

  onboardingForm = new FormGroup({
    userType: new FormControl(''),
  });


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: FormGroup){
    this.router.navigate(['/onboarding/' + form.value.userType]);
  }

}
