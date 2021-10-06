import { Component, OnInit } from '@angular/core';
import { fadeIn } from 'src/app/transition-animations';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faPlus, faUpload } from '@fortawesome/free-solid-svg-icons';
import { Breeds, Generations } from 'src/app/options';
import { DogService } from 'src/app/_services/dog.service';
import { Dog, Litter } from 'src/app/_models/interfaces';
import { LitterBuilder } from 'src/app/_models/builders/litter.builder';
import { LitterService } from 'src/app/_services/litter.service';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { PostResponseImage } from 'src/app/_services/file-upload.service';


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
  breeds = Breeds;
  generations = Generations;
  damName = '';
  sireName = '';

  dogs$: Observable<Dog[]>;
  loadingDogs$: Observable<boolean>;

  /*
   * Form configuration
   */
  name = new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(120)]);
  dam = new FormControl('', [Validators.required]);
  sire = new FormControl('', [Validators.required]);
  breed = new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(120)]);
  generation = new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(120)]);
  dob = new FormControl('', [Validators.required]);
  // isLitterExpected = new FormControl(false);
  photos = new FormControl('');
  // namingScheme = new FormControl('');
  notes = new FormControl('', [Validators.maxLength(1000)]);

  addLitterForm = new FormGroup({
    name: this.name,
    dam: this.dam,
    sire: this.sire,
    breed: this.breed,
    generation: this.generation,
    dob: this.dob,
    photos: this.photos,
    // namingScheme: this.namingScheme,
    notes: this.notes,
  });

  /*
   * End form configuration
   */

  constructor(
    private litterService: LitterService,
    private dogService: DogService,
    public dialogRef: MatDialogRef<AddLitterComponent>,
    ) {
      this.dogs$ = dogService.entities$;
      this.loadingDogs$ = dogService.loading$;
    }

  ngOnInit(): void {
    this.dogService.getAll();

    // Auto set the expecting litter switch depending on dob
    // this.autoSetExpectingLitter();

    // Auto set litter name based on dam and sire name
    this.autoSetLitterName();
  }

  // autoSetExpectingLitter(): void {
  //   // Watch if the date of birth is in the future and set the expected litter switch accordingly
  //   this.dob.valueChanges.subscribe(val => {
  //     if (this.dob.value > Date.now()){
  //       this.isLitterExpected.setValue(true);
  //     } else {
  //       this.isLitterExpected.setValue(false);
  //     }
  //   });
  // }

  onSubmit(): void {
    const litter: Litter = new LitterBuilder()
      .name(this.name.value)
      .dam(this.dam.value)
      .sire(this.sire.value)
      .breed(this.breed.value)
      .generation(this.generation.value)
      .dob(this.dob.value)
      .photos(this.photos.value)
      // .namingScheme(this.namingScheme.value)
      .notes(this.notes.value)
      .build();

    this.litterService.add(litter);

    // Close the dialog
    this.dialogRef.close();
  }

  // setPhotos(image: PostResponseImage): void {
  //   console.log(image.content[0].fileName);
  //   this.photos.setValue(image.content[0].fileName);
  // }

  setPhotos(image: PostResponseImage): void {
    const imageFilenames = [];
    console.log(image.content[0].fileName);

    for (let i = 0; i < image?.content.length; i++) {
      imageFilenames.push(image.content[i].fileName);
    }

    this.photos.setValue(imageFilenames);
  }

  // Automatically set the litter name to be 'DamName and SireName' if the litter name is pristine
  autoSetLitterName(): void {
    this.dam.valueChanges.subscribe(val => {
      if (this.name.pristine) {
        this.dogService.getByKey(this.dam.value).subscribe(
          (dam) => {
            this.damName = dam.name;
            this.name.setValue(`${this.damName} and ${this.sireName}`);
          }
        );
      }
    });

    this.sire.valueChanges.subscribe(val => {
      if (this.name.pristine) {
        this.dogService.getByKey(this.sire.value).subscribe(
          (sire) => {
            this.sireName = sire.name;
            this.name.setValue(`${this.damName} and ${this.sireName}`);
          }
        );
      }
    });
  }
}
