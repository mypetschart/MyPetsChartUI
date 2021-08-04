import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddLitterComponent } from './add-litter/add-litter.component';
import { Litter } from '../models/interfaces';
import { Observable } from 'rxjs';
import { LitterService } from '../services/litter.service';

@Component({
  selector: 'app-litter',
  templateUrl: './litter.component.html',
  styleUrls: ['./litter.component.scss']
})
export class LitterComponent implements OnInit {
  // @Input() litters: Litter | undefined;
  // litters: Litter[] = [];
  loading$: Observable<boolean>;
  litters$: Observable<Litter[]>;
  // litters$ = this.store.select(fromCounter.selectCounter);


  constructor(
    public  dialog: MatDialog,
    private litterService: LitterService) {
    this.litters$ = litterService.entities$;
    this.loading$ = litterService.loading$;
  }

  ngOnInit(): void {
    this.getLitters();
  }

  getLitters() {
    this.litterService.getAll();
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddLitterComponent);

    dialogRef.disableClose = true;

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
