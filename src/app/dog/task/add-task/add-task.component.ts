import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { fadeIn } from 'src/app/transition-animations';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { TaskService } from 'src/app/services/task.service';
import { TaskBuilder } from 'src/app/models/builders/task.builder';
import { Dog, Task, RecurringDate } from 'src/app/models/interfaces';
import { DogService } from 'src/app/services/dog.service';
import { Frequency, TaskTypes } from 'src/app/options';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
  animations: [fadeIn]
})
export class AddTaskComponent implements OnInit {
  faPlus = faPlus;
  dogs: Dog[] = [];
  taskTypes = TaskTypes;
  frequencyOptions = Frequency;
 
  /*
   * Form configuration
   */
  dog = new FormControl('', [Validators.required]);
  type = new FormControl('', [Validators.required]);
  title = new FormControl('', [Validators.required]);
  startDate = new FormControl('', [Validators.required]);
  frequency = new FormControl('', [Validators.required]);
  nextDate = new FormControl('', [Validators.required]);
  notes = new FormControl('');

  addTaskForm = new FormGroup({
    dog: this.dog,
    type: this.type,
    title: this.title,
    recur: new FormGroup({
      startDate: this.startDate,
      frequency: this.frequency,
      nextDate: this.nextDate,
    }),
    notes: this.notes,
  });


  /*
   * End form configuration
   */

  constructor(
    public dialogRef: MatDialogRef<AddTaskComponent>,
    private taskService: TaskService,
    private dogService: DogService
    ) { }

  ngOnInit(): void {
    this.dogService.getDogs().subscribe(
      (dogs) => this.dogs = dogs
    );

    this.onChanges();
  }

  onChanges(): void {
    // Watch if the startDate or the frequency changes to auto-default the nextDate TODO
    this.startDate.valueChanges.subscribe(val => {
      switch (this.frequency.value) {
        case 'hourly':
          this.nextDate.setValue(this.startDate.value);
          break;
        case 'daily':
          this.nextDate.setValue(Date.parse(this.startDate.value));
          break;
        case 'weekly':
          this.nextDate.setValue(Date.parse(this.startDate.value));
          break;
        case 'bi-weekly':
          this.nextDate.setValue(Date.parse(this.startDate.value));
          break;
        case 'monthly':
          this.nextDate.setValue(Date.parse(this.startDate.value));
          break;
        case 'bi-monthly':
          this.nextDate.setValue(Date.parse(this.startDate.value));
          break;
        case 'bi-annually':
          this.nextDate.setValue(Date.parse(this.startDate.value));
          break;
        case 'annually':
          this.nextDate.setValue(Date.parse(this.startDate.value));
          break;
        case 'every other year':
          this.nextDate.setValue(Date.parse(this.startDate.value));
          break;
      }
    });
  }

  onSubmit(){
    let r: RecurringDate | undefined = {
      dateCreated: this.startDate.value,
      regularity: this.frequency.value,
      nextDate: this.nextDate.value
    }

    const task: Task = new TaskBuilder()
      .dogID(this.dog.value)
      .type(this.type.value)
      .title(this.title.value)
      .recur(r)
      .notes(this.notes.value)
      .build();

    this.taskService.addTask(task).subscribe(
      result => {
      console.log(`Dialog result: ${result}`);
    });

    // Close the dialog and push dog to frontend
    this.dialogRef.close(task);
  }

}
