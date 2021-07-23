import { Component, OnInit, Input } from '@angular/core';
import { Dog } from '../structs';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.scss']
})
export class DogsComponent implements OnInit {
  @Input() dogs: Dog | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
