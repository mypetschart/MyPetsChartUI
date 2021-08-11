import { Component, Input, OnInit } from '@angular/core';
import { VacBuilder } from 'src/app/_models/builders/vaccination.builder';
import { WormingBuilder } from 'src/app/_models/builders/worming.builder';
import { Task, Vaccination, Worming } from 'src/app/_models/interfaces';
import { TaskBuilder } from 'src/app/_models/builders/task.builder';

@Component({
  selector: 'app-single-task',
  templateUrl: './single-task.component.html',
  styleUrls: ['./single-task.component.scss']
})
export class SingleTaskComponent implements OnInit {
  @Input() task: Task | undefined;

  taskReminderColor = '';
  taskTypeColor = '';

  constructor() { }

  ngOnInit(): void {
    this.task = new TaskBuilder()
      .id(this.task?.id)
      .name(this.task?.name)
      .type(this.task?.type)
      .refId(this.task?.refId)
      .recur(this.task?.recur)
      .notes(this.task?.notes)
      .build();

    switch (this.task?.type) {
      case 'vac':
        const vac = this.task as Vaccination;
        this.task = new VacBuilder(this.task)
          .vacType(vac?.vacType)
          .lot(vac?.lot)
          .administeredBy(vac?.administeredBy)
          .date(vac?.date)
          .build();
        break;
      case 'worm':
        const worm = this.task as Worming;
        this.task = new WormingBuilder(this.task)
          .wormType(worm?.wormType)
          .dose(worm?.dose)
          .duration(worm?.duration)
          .administeredBy(worm?.administeredBy)
          .date(worm?.date)
          .build();
        break;
    }

    console.log(this.task);

    this.setDepictorColor();
    this.setReminderColor();

  }

  setDepictorColor(): void {
    // Set task depictor color based on task type
    switch (this.task?.type) {
      case 'vac':
        this.taskTypeColor = '#4498f6';
        break;
      case 'worm':
        this.taskTypeColor = '#74c69d';
        break;
      case 'heat':
        this.taskTypeColor = '#ff883c';
        break;
      case 'temp':
        this.taskTypeColor = '#a82bff';
        break;
    }
  }

  setReminderColor(): void {
    const date = new Date();

    const oneWeek = new Date().setDate(date.getDate() + 7);
    const oneMonth = new Date().setDate(date.getDate() + 30);
    const now = Date.now();

    if (this.task?.recur?.nextDate && this.task.recur.nextDate.getTime() < now) {
      this.taskReminderColor = '#bf0000'; // task is expired
    } else if (this.task?.recur?.nextDate && this.task.recur.nextDate.getTime() < oneWeek){
      this.taskReminderColor = '#ffb735'; // task expires in one week
    } else if (this.task?.recur?.nextDate && this.task.recur.nextDate.getTime() < oneMonth){
      this.taskReminderColor = 'yellow'; // task expires in one month
    } else {
      this.taskReminderColor = '#74c69d';
    }
  }
}
