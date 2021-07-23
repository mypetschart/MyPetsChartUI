import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddLitterComponent } from './add-litter/add-litter.component';
import { Litter } from '../structs';
import { LITTERS } from './mock-litters'

@Component({
  selector: 'app-litters',
  templateUrl: './litters.component.html',
  styleUrls: ['./litters.component.scss']
})
export class LittersComponent implements OnInit {
  // @Input() litters: Litter | undefined;
  litters = LITTERS;

  constructor(public  dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddLitterComponent);

    dialogRef.disableClose = true;

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
