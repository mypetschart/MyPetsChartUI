import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { fadeIn } from 'src/app/transition-animations';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DogTypes, Breeds } from '../../options';
import { faPlus, faUpload, faMars, faVenus } from '@fortawesome/free-solid-svg-icons';
import { Dog } from 'src/app/models/interfaces';
import { DogBuilder } from 'src/app/models/builders/dog.builder';
import { DogService } from 'src/app/services/dog.service';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-add-dog',
  templateUrl: './add-dog.component.html',
  styleUrls: ['./add-dog.component.scss'],
  animations: [
    fadeIn
   ]
})
export class AddDogComponent implements OnInit {
  @Output() onAddDog: EventEmitter<Dog> = new EventEmitter();

  types = DogTypes;
  breeds = Breeds;
  faPlus = faPlus;
  faUpload = faUpload;
  faMars = faMars;
  faVenus = faVenus;

  dogs$: Observable<Dog[]>;
  loadingDogs$: Observable<boolean>;

  /*
   * Form configuration
   */
  type = new FormControl('', [Validators.required]);
  name = new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(120)]);
  sex = new FormControl('');
  breed = new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(120)]);
  generation = new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(120)]);
  dob = new FormControl('', [Validators.required]);
  color = new FormControl('');
  weight = new FormControl('');
  microchip = new FormControl('');
  photos = new FormControl('');

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

  constructor(
    public dialogRef: MatDialogRef<AddDogComponent>,
    private dogService: DogService
  ) {
    this.dogs$ = dogService.entities$;
    this.loadingDogs$ = dogService.loading$;
  }

  ngOnInit(): void {
  }

  onSubmit(){
    const dog: Dog = new DogBuilder()
      .type(this.type.value)
      .name(this.name.value)
      .sex(this.sex.value)
      .breed(this.breed.value)
      .generation(this.generation.value)
      .dob(this.dob.value)
      .color(this.color.value)
      .weight(this.weight.value)
      .microchip(this.microchip.value)
      .photos(this.photos.value)
      .build();

    this.dogService.add(dog);

    // Close the dialog and push dog to frontend
    this.dialogRef.close();
  }

  uploadPhotos(file:any){
    console.log(file)
  }

}