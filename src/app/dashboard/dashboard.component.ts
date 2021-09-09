import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Dog, Litter, Task } from '../_models/interfaces';
import { DogService } from '../_services/dog.service';
import { MatDialog } from '@angular/material/dialog';
import { AddDogComponent } from '../dog/add-dog/add-dog.component';
import { fadeIn } from '../transition-animations';
import { DogBuilder } from '../_models/builders/dog.builder';
import { AddLitterComponent } from '../litter/add-litter/add-litter.component';
import { TaskService } from '../_services/task.service';
import { AddTaskComponent } from '../task/add-task/add-task.component';
import { LitterService } from '../_services/litter.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [
    fadeIn
   ]
})
export class DashboardComponent implements OnInit {
  noDams = true;
  noSires = true;
  noPuppies = true;

  litters$: Observable<Litter[]>;
  loadingLitters$: Observable<boolean>;

  dogs$: Observable<Dog[]>;
  loadingDogs$: Observable<boolean>;

  tasks$: Observable<Task[]>;
  loadingTasks$: Observable<boolean>;

  constructor(
    public dialog: MatDialog,
    private dogService: DogService,
    private taskService: TaskService,
    private litterService: LitterService,
    private store: Store
    ) {
      this.litters$ = litterService.entities$;
      this.loadingLitters$ = litterService.loading$;

      this.dogs$ = dogService.entities$;
      this.loadingDogs$ = dogService.loading$;

      this.tasks$ = taskService.entities$;
      this.loadingTasks$ = taskService.loading$;
    }

  ngOnInit(): void {
    this.litterService.getAll();
    this.dogService.getAll();
    this.taskService.getAll();

    this.dogs$.subscribe(
      (dogs) => {
      // honestly probably a naive way of checking if dog of types exist but oh whale
      for (const dog of dogs) {
        if (dog.type === 'dam'){
          this.noDams = false;
        }

        if (dog.type === 'sire'){
          this.noSires = false;
        }

        if (dog.type === 'puppy'){
          this.noPuppies = false;
        }

        if (this.noDams && this.noSires && this.noPuppies){
          break;
        }
      }
    });
  }

  addDogDialog(dogType: string) {
    const dialogRef = this.dialog.open(AddDogComponent, {
      data: {type: dogType}
    });

    dialogRef.disableClose = true;
  }
  
  addTaskDialog(){
    const dialogRef = this.dialog.open(AddTaskComponent);

    dialogRef.disableClose = true;
  }

  addLitterDialog() {
    const dialogRef = this.dialog.open(AddLitterComponent);

    dialogRef.disableClose = true;
  }
  

}
