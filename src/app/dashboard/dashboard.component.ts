import { Component, OnInit } from '@angular/core';
import { Dog, Litter, Task } from '../models/interfaces';
import { DogService } from '../services/dog.service';
import { MatDialog } from '@angular/material/dialog';
import { AddDogComponent } from '../dog/add-dog/add-dog.component';
import { fadeIn } from '../transition-animations';
import { DogBuilder } from '../models/builders/dog.builder';
import { AddLitterComponent } from '../litter/add-litter/add-litter.component';
import { TaskService } from '../services/task.service';
import { AddTaskComponent } from '../dog/task/add-task/add-task.component';
import { LitterService } from '../services/litter.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [
    fadeIn
   ]
})
export class DashboardComponent implements OnInit {
  dogs: Dog[] = [];
  litters: Litter[] = [];
  tasks: Task[] = [];
  noDams = true;
  noSires = true;
  noPuppies = true;
  noTasks = true;
  noLitters = true;

  constructor(
    public dialog: MatDialog,
    private dogService: DogService,
    private taskService: TaskService,
    private litterService: LitterService,
    ) { }

  ngOnInit(): void {
    // Get the current dogs for the dashboard
    this.dogService.getDogs().subscribe(
      (dogs) => {
        this.dogs = dogs;

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
      }
    );

    // Get the current tasks for the dashboard
    this.taskService.getTasks().subscribe((tasks) => {
      tasks.sort((a, b) => (Date.parse(a.recur.nextDate.toString()) > Date.parse(b.recur.nextDate.toString())) ? 1 : -1);
      this.tasks = tasks;
      if (tasks.length > 0){
        this.noTasks = false;
      }
    });

    // Get the current litters
    this.litterService.getLitters().subscribe((litters) => {
      // tasks.sort((a, b) => (Date.parse(a.recur.nextDate.toString()) > Date.parse(b.recur.nextDate.toString())) ? 1 : -1);
      this.litters = litters;
      if (litters.length > 0){
        this.noLitters = false;
      }
    });
  }

  addDogDialog() {
    const dialogRef = this.dialog.open(AddDogComponent);

    dialogRef.disableClose = true;

    dialogRef.afterClosed().subscribe(dog => {
      console.log(dog);
      this.dogs.push(dog);
    });
  }
  
  addTaskDialog(){
    const dialogRef = this.dialog.open(AddTaskComponent);

    dialogRef.disableClose = true;

    dialogRef.afterClosed().subscribe(task => {
      console.log(task);
      this.tasks.push(task);
    });
  }

  addLitterDialog() {
    const dialogRef = this.dialog.open(AddLitterComponent);

    dialogRef.disableClose = true;

    dialogRef.afterClosed().subscribe(litter => {
      console.log(litter);
      this.litters.push(litter);
    });
  }
  

}
