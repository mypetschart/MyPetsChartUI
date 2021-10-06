import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { fadeIn } from 'src/app/transition-animations';


@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.scss'],
  animations: [
    fadeIn
  ]
})
export class OnboardingComponent implements OnInit {

  userType = new FormControl('');

  onboardingForm = new FormGroup({
    userType: this. userType
  });

  faAngleDoubleRight = faAngleDoubleRight;

  constructor(private router: Router, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    // Icons
    iconRegistry.addSvgIcon('breeder', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/breeder-icon.svg'));
    iconRegistry.addSvgIcon('owner', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/owner-icon.svg'));
    iconRegistry.addSvgIcon('vet', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/vet-icon.svg'));
  }

  ngOnInit(): void {
    this.userType.setValue("owner");
  }

  onSubmit(form: FormGroup){
    this.router.navigate(['/onboarding/' + form.value.userType]);
  }
}
