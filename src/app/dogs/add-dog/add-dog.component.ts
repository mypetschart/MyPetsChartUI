import { Component, OnInit } from '@angular/core';
import { fadeIn } from 'src/app/transition-animations';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DogTypes, Breeds } from '../../options';
import { faPlus, faUpload, faMars, faVenus } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-add-dog',
  templateUrl: './add-dog.component.html',
  styleUrls: ['./add-dog.component.scss'],
  animations: [
    fadeIn
   ]
})
export class AddDogComponent implements OnInit {
  types = DogTypes;
  breeds = Breeds;
  faPlus = faPlus;
  faUpload = faUpload;
  faMars = faMars;
  faVenus = faVenus;

  /*
   * Form configuration
   */
  type = new FormControl('', [Validators.required]);
  name = new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(120)]);
  sex = new FormControl('', [Validators.required]);
  breed = new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(120)]);
  generation = new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(120)]);
  dob = new FormControl('', [Validators.required]);
  color = new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(120)]);
  weight = new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(120)]);
  microchip = new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(120)]);
  photos = new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(120)]);

  addDogForm = new FormGroup({
    type: this.type,
    name: this.name,
    sex: this.sex,
    breed: this.breed,
    generation: this.generation,
    dob: this.dob,
    color: this.color,
    weight: this.weight,
    microchip: this.microchip,
    photos: this.photos,
  });
  /*
   * End form configuration
   */

  constructor() { }
  ngOnInit(): void {
  }

  onSubmit(){
    
  }

  uploadPhotos(file:any){
    console.log(file)
  }

}