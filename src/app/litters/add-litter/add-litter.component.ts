import { Component, OnInit } from '@angular/core';
import { fadeIn } from 'src/app/transition-animations';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faPlus, faUpload } from '@fortawesome/free-solid-svg-icons';
import { DOGS } from 'src/app/dogs/mock-dogs';
import { Breeds } from 'src/app/options';


@Component({
  selector: 'app-add-litter',
  templateUrl: './add-litter.component.html',
  styleUrls: ['./add-litter.component.scss'],
  animations: [
    fadeIn
   ]
})
export class AddLitterComponent implements OnInit {
  faPlus = faPlus;
  faUpload = faUpload;
  dogs = DOGS;
  breeds = Breeds;

  /*
   * Form configuration
   */
  name = new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(120)]);
  dam = new FormControl('', [Validators.required]);
  sire = new FormControl('', [Validators.required]);
  breed = new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(120)]);
  generation = new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(120)]);
  dob = new FormControl('', [Validators.required]);
  isLitterExpected = new FormControl(false);
  photos = new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(120)]);
  notes = new FormControl('', [Validators.maxLength(1000)]);

  addLitterForm = new FormGroup({
    name: this.name,
    dam: this.dam,
    sire: this.sire,
    breed: this.breed,
    generation: this.generation,
    dob: this.dob,
    isLitterExpected: this.isLitterExpected,
    photos: this.photos,
    notes: this.notes,
  });

  /*
   * End form configuration
   */

  constructor() { }

  ngOnInit(): void {
    this.onChanges();
  }

  onChanges(): void {
    // Watch if the date of birth is in the future and set the expected litter switch accordingly
    this.dob.valueChanges.subscribe(val => {
      if (this.dob.value > Date.now()){
        this.isLitterExpected.setValue(true);
      } else {
        this.isLitterExpected.setValue(false);
      }
    });
  }

  onSubmit(){
    
  }

  uploadPhotos(file:any){
    console.log(file)
  }

}