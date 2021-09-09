import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { fadeIn } from 'src/app/transition-animations';
import { Litter } from 'src/app/_models/interfaces';
import { LitterService } from 'src/app/_services/litter.service';
import { AddLitterComponent } from '../add-litter/add-litter.component';

@Component({
  selector: 'app-all-litters',
  templateUrl: './all-litters.component.html',
  styleUrls: ['./all-litters.component.scss'],
  animations: [fadeIn]
})
export class AllLittersComponent implements OnInit {
  litters$: Observable<Litter[]>;
  loadingLitters$: Observable<boolean> = new Observable<false>();

  constructor(
    public dialog: MatDialog,
    private litterService: LitterService
    ) {
    this.litterService.getAll();
    this.litters$ = this.litterService.entities$;
    this.loadingLitters$ = this.litterService.loading$;
  }

  ngOnInit(): void {
  }

  addLitterDialog() {
    const dialogRef = this.dialog.open(AddLitterComponent);

    dialogRef.disableClose = true;
  }

}
