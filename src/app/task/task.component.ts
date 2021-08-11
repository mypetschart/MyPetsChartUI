import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Task } from 'src/app/_models/interfaces';
import { TaskService } from 'src/app/_services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  taskId = '';
  singleTask$: Observable<Task> = new Observable<Task>();

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.taskId = params['id'];
    });

    this.singleTask$ = this.taskService.getByKey(this.taskId);

    // const queryParams = {
    //   name: this.taskName
    // };

    // this.taskService.getWithQuery(queryParams);
  }

}
