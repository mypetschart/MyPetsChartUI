import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { TaskBuilder } from '../../models/builders/task.builder';
import { Task } from 'src/app/models/interfaces';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  taskName = '';

  tasks$: Observable<Task[]>;
  loadingTasks$: Observable<boolean>;

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService
  ) {
    this.tasks$ = taskService.entities$;
    this.loadingTasks$ = taskService.loading$;
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.taskName = params['task'];
    });

    const queryParams = {
      name: this.taskName
    };

    this.taskService.getWithQuery(queryParams);
  }

}
