import { Component, OnInit, Output, EventEmitter, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { fadeIn } from 'src/app/transition-animations';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { TaskService } from 'src/app/_services/task.service';
import { TaskBuilder } from 'src/app/_models/builders/task.builder';
import { Dog, Task, RecurringDate } from 'src/app/_models/interfaces';
import { DogService } from 'src/app/_services/dog.service';
import { Frequency, TaskTypes } from 'src/app/options';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { MatSelect } from '@angular/material/select';
import { take, takeUntil } from 'rxjs/operators';
import { DogBuilder } from 'src/app/_models/builders/dog.builder';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
  animations: [fadeIn]
})
export class AddTaskComponent implements OnInit, AfterViewInit, OnDestroy {
  faPlus = faPlus;
  taskTypes = TaskTypes;
  frequencyOptions = Frequency;

  dogs$: Observable<Dog[]>;
  loadingDogs$: Observable<boolean>;

  /*
   * Select search filter configuration
   */
  dogFilterCtrl: FormControl = new FormControl();
  public filteredDogs: ReplaySubject<Dog[]> = new ReplaySubject<Dog[]>(1);
  @ViewChild('singleSelect', { static: true }) singleSelect: MatSelect | undefined;
  protected _onDestroy = new Subject<void>();


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

    // load the initial dog list
    this.dogs$.subscribe(
      (dogs) => {
        this.filteredDogs.next(dogs.slice());
      }
    );

    // listen for search field value changes
    this.dogFilterCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterDogs();
      });
  }

  ngAfterViewInit(): void {
    this.setInitialValue();
  }

  ngOnDestroy(): void {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  /**
   * Sets the initial value after the filteredBanks are loaded initially
   */
  protected setInitialValue(): void {
    this.filteredDogs
      .pipe(take(1), takeUntil(this._onDestroy))
      .subscribe(() => {
        // setting the compareWith property to a comparison function
        // triggers initializing the selection according to the initial value of
        // the form control (i.e. _initializeSelection())
        // this needs to be done after the filteredBanks are loaded initially
        // and after the mat-option elements are available
        this.singleSelect!.compareWith = (a: Dog, b: Dog) => a && b && a.id === b.id;
      });
  }

  protected filterDogs(): void {
    if (!this.dogs$) {
      return;
    }

    // get the search keyword
    let search = this.dogFilterCtrl.value;

    if (!search) {
      this.dogs$.subscribe(
        (dogs) => {
          this.filteredDogs.next(dogs.slice());
        }
      );
      return;
    } else {
      search = search.toLowerCase();
    }

    // filter the dogs
    this.dogs$.subscribe(
      (dogs) => {
        this.filteredDogs.next(
         dogs.filter(dog => dog.name.toLowerCase().indexOf(search) > -1)
        );
      }
    );
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
    const dog = this.dog.value as Dog;

    const r: RecurringDate | undefined = {
      dateCreated: this.startDate.value,
      regularity: this.frequency.value,
      nextDate: this.nextDate.value
    };

    const task: Task = new TaskBuilder()
      .name(this.title.value)
      .type(this.type.value)
      .refId(dog.id)
      .recur(r)
      .notes(this.notes.value)
      .build();

    this.taskService.add(task);

    this.dialogRef.close();
  }

}
