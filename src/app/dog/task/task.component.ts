import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskBuilder } from '../../models/builders/task.builder';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  task = new TaskBuilder().build();
  taskName = '';

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.taskName = params['task'];
    });

    this.taskService.getTasksByName(this.taskName).subscribe(
      (tasks) => {
        this.task = tasks;
      }
    );
  }

}
