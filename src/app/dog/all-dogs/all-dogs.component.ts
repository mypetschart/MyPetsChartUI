import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { fadeIn } from 'src/app/transition-animations';
import { Dog } from 'src/app/_models/interfaces';
import { DogService } from 'src/app/_services/dog.service';
import { AddDogComponent } from '../add-dog/add-dog.component';

@Component({
  selector: 'app-all-dogs',
  templateUrl: './all-dogs.component.html',
  styleUrls: ['./all-dogs.component.scss'],
  animations: [fadeIn]
})
export class AllDogsComponent implements OnInit {

  dogs$: Observable<Dog[]> = new Observable<Dog[]>();
  loadingDogs$: Observable<boolean> = new Observable<boolean>();

  puppies: Dog[] = [];
  dams: Dog[] = [];
  sires: Dog[] = [];

  constructor(
    public dialog: MatDialog,
    private dogService: DogService
    ) { }

  ngOnInit(): void {
    this.dogs$ = this.dogService.getAll();
    this.loadingDogs$ = this.dogService.loading$;

    this.dogs$.subscribe(
      (dogs) => {
        dogs.forEach((dog) => {
          console.log(dog);
          switch (dog.type) {
            case 'puppy':
              this.puppies.push(dog);
              break;
            case 'dam':
              this.dams.push(dog);
              break;
            case 'sire':
              this.sires.push(dog);
              break;
          }
        });
      }
    );
  }

  addDogDialog(dogType: string) {
    const dialogRef = this.dialog.open(AddDogComponent, {
      data: {type: dogType}
    });

    dialogRef.disableClose = true;
  }

}
