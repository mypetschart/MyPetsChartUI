import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Task } from 'src/app/_models/interfaces';
import { TaskService } from 'src/app/_services/task.service';
import { AddTaskComponent } from '../add-task/add-task.component';

@Component({
  selector: 'app-all-tasks',
  templateUrl: './all-tasks.component.html',
  styleUrls: ['./all-tasks.component.scss']
})
export class AllTasksComponent implements OnInit {
  tasks$: Observable<Task[]>;

  constructor(private taskService: TaskService, public dialog: MatDialog) {
    this.tasks$ = this.taskService.entities$;
  }

  ngOnInit(): void {
    this.taskService.getAll();
  }

  addTaskDialog(): void {
    const dialogRef = this.dialog.open(AddTaskComponent);

    dialogRef.disableClose = true;
  }

}
