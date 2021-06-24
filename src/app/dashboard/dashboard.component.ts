import { Component, OnInit } from '@angular/core';
import { Dog } from '../dogs/dog';
import { DOGS } from '../dogs/mock-dogs';
import { AddDogComponent } from '../dogs/add-dog/add-dog.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  dogs: Dog[] = DOGS;

  constructor() { }

  ngOnInit(): void {
  }

}
