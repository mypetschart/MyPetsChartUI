import { Component, OnInit } from '@angular/core';
import { Dog } from '../structs';
import { DOGS } from '../dogs/mock-dogs';
import { MatDialog } from '@angular/material/dialog';
import { AddDogComponent } from '../dogs/add-dog/add-dog.component';
import { fadeIn } from '../transition-animations';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [
    fadeIn
   ]
})
export class DashboardComponent implements OnInit {
  dogs: Dog[] = DOGS;

  constructor(public  dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddDogComponent);

    dialogRef.disableClose = true;

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
