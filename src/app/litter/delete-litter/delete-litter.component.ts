import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { fadeIn } from 'src/app/transition-animations';
import { LitterComponent } from '../litter.component';

@Component({
  selector: 'app-delete-litter',
  templateUrl: './delete-litter.component.html',
  styleUrls: ['./delete-litter.component.scss'],
  animations: [fadeIn]
})
export class DeleteLitterComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<LitterComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {dam: string, sire: string}
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
