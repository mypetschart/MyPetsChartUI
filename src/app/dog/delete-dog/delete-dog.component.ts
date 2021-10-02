import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { fadeIn } from 'src/app/transition-animations';
import { DogComponent } from '../dog.component';

@Component({
  selector: 'app-delete-dog',
  templateUrl: './delete-dog.component.html',
  styleUrls: ['./delete-dog.component.scss']
})
export class DeleteDogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {dogName: string}
  ) { }

  ngOnInit(): void {
  }

  onYesClick(): void {
    this.dialogRef.close('yes');
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
