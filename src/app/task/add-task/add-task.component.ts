import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { fadeIn } from 'src/app/transition-animations';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { TaskService } from 'src/app/_services/task.service';
import { TaskBuilder } from 'src/app/_models/builders/task.builder';
import { Dog, Task, RecurringDate } from 'src/app/_models/interfaces';
import { DogService } from 'src/app/_services/dog.service';
import { Frequency, TaskTypes } from 'src/app/options';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
  animations: [fadeIn]
})
export class AddTaskComponent implements OnInit {
  faPlus = faPlus;
  taskTypes = TaskTypes;
  frequencyOptions = Frequency;

  dogs$: Observable<Dog[]>;
  loadingDogs$: Observable<boolean>;

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
    ) {
      this.dogs$ = dogService.entities$;
      this.loadingDogs$ = dogService.loading$;
    }

  ngOnInit(): void {
    this.dogService.getAll();

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

  onSubmit(): void{
    const r: RecurringDate | undefined = {
      dateCreated: this.startDate.value,
      regularity: this.frequency.value,
      nextDate: this.nextDate.value
    };

    const task: Task = new TaskBuilder()
      .name(this.title.value)
      .type(this.type.value)
      .refId(this.dog.value)
      .recur(r)
      .notes(this.notes.value)
      .build();

    this.taskService.add(task);

    // Close the dialog and push dog to frontend
    this.dialogRef.close();
  }

}
