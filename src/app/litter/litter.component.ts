import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddLitterComponent } from './add-litter/add-litter.component';
import { Dog, Litter } from '../_models/interfaces';
import { Observable } from 'rxjs';
import { LitterService } from '../_services/litter.service';
import { ActivatedRoute, Router } from '@angular/router';
import { fadeIn } from '../transition-animations';
import { DogService } from '../_services/dog.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EntityActionFactory, EntityOp } from '@ngrx/data';
import { DeleteLitterComponent } from './delete-litter/delete-litter.component';

@Component({
  selector: 'app-litter',
  templateUrl: './litter.component.html',
  styleUrls: ['./litter.component.scss'],
  animations: [fadeIn]
})
export class LitterComponent implements OnInit {
  litterId = '';
  damName = '';
  sireName = '';

  litter$: Observable<Litter> = new Observable<Litter>();
  dam$: Observable<Dog> = new Observable<Dog>();
  sire$: Observable<Dog> = new Observable<Dog>();
  puppies$: Observable<Dog[]> = new Observable<Dog[]>();


  constructor(
    private router: Router,
    public dialog: MatDialog,
    public deleteDialog: MatDialog,
    private route: ActivatedRoute,
    private litterService: LitterService,
    private dogService: DogService,
    private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.litterId = params['id'];
    });

    this.litter$ = this.litterService.getByKey(this.litterId);

    // Get the dam and sire for this litter
    this.litter$.subscribe(
      (litter) => {
        const damId = litter.dam;
        const sireId = litter.sire;

        this.dam$ = this.dogService.getByKey(damId);
        this.sire$ = this.dogService.getByKey(sireId);

        this.dam$.subscribe(
          (dam) => {
            this.damName = dam.name;
          }
        );

        this.sire$.subscribe(
          (sire) => {
            this.sireName = sire.name;
          }
        );
      }
    );

    // Get puppies for this litter
    this.puppies$ = this.dogService.getWithQuery({
      litter: this.litterId
    });
  }

  addLitter(): void {
    const dialogRef = this.dialog.open(AddLitterComponent);

    dialogRef.disableClose = true;
  }

  deleteLitter(): void {
    const dialogRef = this.deleteDialog.open(DeleteLitterComponent, {
      data: {dam: this.damName, sire: this.sireName}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'yes'){
        this.litterService.delete(this.litterId);

        this.snackBar.open(`Litter from ${this.damName} and ${this.sireName} has been deleted.`, 'Ok', {
          duration: 7000
        });

        // Redirect back to all litters page
        this.router.navigate(['/litters']);
      }
    });
  }

}
