import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  @Input() data: any;

  view: [number, number] = [800, 400];

  constructor() {
    this.view = [innerWidth / 1.3, 400];
  }

  ngOnInit(): void {
  }

  onResize(event: any): void {
    this.view = [event.target.innerWidth / 1.35, 400];
  }

}
