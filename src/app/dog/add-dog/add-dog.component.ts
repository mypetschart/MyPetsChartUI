import { Component, OnInit, Output, EventEmitter, Inject, ViewChild } from '@angular/core';
import { fadeIn } from 'src/app/transition-animations';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatDatepicker, MatDatepickerInputEvent} from '@angular/material/datepicker';
import { DogTypes, Breeds, Generations } from '../../options';
import { faPlus, faUpload, faMars, faVenus } from '@fortawesome/free-solid-svg-icons';
import { Dam, Dog, Litter, Puppy, Sire } from 'src/app/_models/interfaces';
import { DogBuilder } from 'src/app/_models/builders/dog.builder';
import { DogService } from 'src/app/_services/dog.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable, Subscription } from 'rxjs';
import { PuppyBuilder } from 'src/app/_models/builders/puppy.builder';
import { DamBuilder } from 'src/app/_models/builders/dam.builder';
import { SireBuilder } from 'src/app/_models/builders/sire.builder';
import { LitterService } from 'src/app/_services/litter.service';
import { FileUploadService, PostResponseImage } from 'src/app/_services/file-upload.service';
import { HttpEventType } from '@angular/common/http';


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
  faMars = faMars;
  faVenus = faVenus;
  generations = Generations;

  dogs$: Observable<Dog[]>;
  loadingDogs$: Observable<boolean>;

  litters$: Observable<Litter[]>;

  /*
   * Form configuration
   */
  type = new FormControl('', Validators.required);
  name = new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(120)]);
  breed = new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(120)]);
  generation = new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(120)]);
  dob = new FormControl('', Validators.required);
  color = new FormControl('');
  weight = new FormControl('');
  microchip = new FormControl('');
  photos = new FormControl(['']);

  // puppy fields
  sex = new FormControl('');
  litter = new FormControl('');

  // dam fields
  lastHeatDate = new FormControl('');
  lastHeatLength = new FormControl('');

  // sire fields
  studAppointments = new FormControl('');

  addDogForm = new FormGroup({
    type: this.type,
    name: this.name,
    breed: this.breed,
    generation: this.generation,
    dob: this.dob,
    color: this.color,
    weight: this.weight,
    microchip: this.microchip,
    photos: this.photos,
    puppyFields: new FormGroup({
      sex: this.sex,
      litter: this.litter
    }),
    damFields: new FormGroup({
      lastHeatDate: this.lastHeatDate,
      lastHeatLength: this.lastHeatLength
    }),
    sireFields: new FormGroup({
      studAppointments: this.studAppointments
    })
  });
  /*
   * End form configuration
   */
  constructor(
    public dialogRef: MatDialogRef<AddDogComponent>,
    private dogService: DogService,
    private litterService: LitterService,
    private fileUploadService: FileUploadService,
    @Inject(MAT_DIALOG_DATA) public data: {type: string, litterId: number}
  ) {
    this.dogs$ = dogService.entities$;
    this.loadingDogs$ = dogService.loading$;

    this.litters$ = litterService.entities$;

    if (data.type !== '') {
      this.type.setValue(data.type);
    }

    if (data.litterId !== 0) {
      this.litter.setValue(data.litterId);
      this.setLitterFields();
    }
  }

  ngOnInit(): void {
  }

  setPhotos(image: PostResponseImage): void {
    const imageFilenames = [];
    console.log(image.content[0].fileName);

    for (let i = 0; i < image?.content.length; i++) {
      imageFilenames.push(image.content[i].fileName);
    }

    this.photos.setValue(imageFilenames);
  }

  onSubmit(): void{
    console.log("submitting form");
    const dog: Dog = new DogBuilder()
      .type(this.type.value)
      .name(this.name.value)
      .breed(this.breed.value)
      .generation(this.generation.value)
      .dob(this.dob.value)
      .color(this.color.value)
      .weight(this.weight.value)
      .microchip(this.microchip.value)
      .photos(this.photos.value)
      .build();

    switch (this.type.value){
      case 'dam':
        const date = new Date(this.lastHeatDate.value);

        const dam: Dam = new DamBuilder(dog)
          // .heat({
          //   predictedDate: date,
          //   actualDate: new Date(),
          //   estFutureDate: new Date(date.setMonth(date.getMonth() + 6)),
          //   lengthInDays: this.lastHeatLength.value
          // })
          .build();
        this.dogService.add(dam);
        break;
      case 'sire':
        const sire: Sire = new SireBuilder(dog)
          // .studAppointments(this.dates)
          .build();
        this.dogService.add(sire);
        break;
      case 'puppy':
        const puppy: Puppy = new PuppyBuilder(dog)
          .sex(this.sex.value)
          .litter(this.litter.value)
          .build();
        this.dogService.add(puppy);
        break;
    }

    // Close the dialog
    this.dialogRef.close();
  }

  // Automatically set the other fields if the puppies litter is selected
  setLitterFields(): void {
    const selectedLitter = this.litterService.getByKey(this.litter.value);
    selectedLitter.subscribe(
      (litter) => {
        this.breed.setValue(litter.breed);
        this.breed.disable();
        this.dob.setValue(litter.dob);
        this.dob.disable();
        this.generation.setValue(litter.generation);
        this.generation.disable();
      }
    );
  }
}
