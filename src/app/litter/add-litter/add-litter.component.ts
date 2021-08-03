import { Component, OnInit } from '@angular/core';
import { fadeIn } from 'src/app/transition-animations';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faPlus, faUpload } from '@fortawesome/free-solid-svg-icons';
import { Breeds } from 'src/app/options';
import { DogService } from 'src/app/services/dog.service';
import { Dog, Litter } from 'src/app/models/interfaces';
import { LitterBuilder } from 'src/app/models/builders/litter.builder';
import { LitterService } from 'src/app/services/litter.service';
import { MatDialogRef } from '@angular/material/dialog';


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
  dogs: Dog[] = [];
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
  photos = new FormControl('');
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

  constructor(
    private litterService: LitterService,
    private dogService: DogService,
    public dialogRef: MatDialogRef<AddLitterComponent>,
    ) { }

  ngOnInit(): void {
    this.dogService.getDogs().subscribe(
      (dogs) => this.dogs = dogs
    );

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
    const litter: Litter = new LitterBuilder()
      .name(this.name.value)
      .damID(this.dam.value)
      .sireID(this.sire.value)
      .breed(this.breed.value)
      .generation(this.generation.value)
      .dob(this.dob.value)
      .photos(this.photos.value)
      .notes(this.notes.value)
      // .tasks(this.tasks.value) TODO
      .build();

    this.litterService.addLitter(litter).subscribe(
      result => {
      console.log(`Dialog result: ${result}`);
    });

    // Close the dialog and push dog to frontend
    this.dialogRef.close(litter);
  }

  uploadPhotos(file:any){
    console.log(file)
  }

}