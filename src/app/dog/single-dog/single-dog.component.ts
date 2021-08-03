import { Component, OnInit, Input } from '@angular/core';
import { Dog } from '../../models/interfaces';

@Component({
  selector: 'app-single-dog',
  templateUrl: './single-dog.component.html',
  styleUrls: ['./single-dog.component.scss']
})
export class SingleDogComponent implements OnInit {
  @Input() dog: Dog | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
