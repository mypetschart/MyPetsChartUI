import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Dam, Dog, Litter, Puppy, Sire, Task } from '../_models/interfaces';
import { DogService } from '../_services/dog.service';
import { fadeIn } from '../transition-animations';
import { LitterService } from '../_services/litter.service';
import { DamBuilder } from '../_models/builders/dam.builder';
import { SireBuilder } from '../_models/builders/sire.builder';
import { PuppyBuilder } from '../_models/builders/puppy.builder';
import { DogBuilder } from '../_models/builders/dog.builder';
import { multi } from './data';
import { TaskService } from '../_services/task.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { FileUploadService } from '../_services/file-upload.service';
import { DeleteDogComponent } from './delete-dog/delete-dog.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.scss'],
  animations: [fadeIn]
})
export class DogComponent implements OnInit, OnDestroy {
  dogId = '';
  dogType = '';
  dogName = '';

  dog$: Observable<Dog> = new Observable<Dog>();
  dam: Dam | undefined;
  sire: Sire | undefined;
  puppy: Puppy | undefined;
  tasks$: Observable<Task[]> = new Observable<Task[]>();
  litter$: Observable<Litter> = new Observable<Litter>();

  // CHART
  multi = multi;

  // Dam charts
  temps: Task[] = [];

  imagePath = '';

  navigationSubscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dogService: DogService,
    private taskService: TaskService,
    private fileService: FileUploadService,
    public deleteDialog: MatDialog,
    private snackBar: MatSnackBar,
    private litterService: LitterService
  ) {
    this.route.params.subscribe(params => {
      this.dogId = params['id'];
    });

    this.dog$ = this.dogService.getByKey(this.dogId);

    this.dog$.subscribe(
      dog => {
        this.dogType = dog.type;
        this.dogName = dog.name;

        // Download the dog photos fro S3
        this.fileService.download(dog.photos[0]).subscribe(
          (fileName) => {
            this.imagePath = fileName.content.imageUrl;
            console.log(this.imagePath);
          }
        );

        switch (dog.type){
          case 'dam':
            this.loadDam(dog);
            break;
          case 'sire':
            this.sire = new SireBuilder(dog).build();
            break;
          case 'puppy':
            this.loadPuppy(dog);
            break;
        }
      }
    );

    // subscribe to the router events. Store the subscription so we can
    // unsubscribe later.
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        // this.router.navigate([], {
        //   skipLocationChange: true,
        //   queryParamsHandling: 'merge' //== if you need to keep queryParams
        // });
        // this.route.params.subscribe(params => {
        //   this.dogId = params['id'];
        //   this.dog$ = this.dogService.getByKey(this.dogId);
        // });
      }
    });
  }

  ngOnInit(): void { }

  loadDam(dog: Dog): void {
    this.dam = new DamBuilder(dog).build();

    const queryParams = {
      refId: this.dogId
    };

    this.tasks$ = this.taskService.getWithQuery(queryParams);

    this.tasks$.subscribe(
      (tasks) => {
        this.temps = tasks;
      }
    );
  }

  loadPuppy(dog: Dog): void {
    this.puppy = new PuppyBuilder(dog).build();

    this.litter$ = this.litterService.getByKey(this.puppy.litter);

    const taskQuery = {
      refId: this.dogId
    };

    this.tasks$ = this.taskService.getWithQuery(taskQuery);
  }

  ngOnDestroy() {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }

  deleteDog(): void {
    const dialogRef = this.deleteDialog.open(DeleteDogComponent, {
      data: {dogName: this.dogName}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'yes'){
        this.dogService.delete(this.dogId);

        this.snackBar.open(`${this.dogName} has been deleted.`, 'Ok', {
          duration: 7000
        });

        // Redirect back to all dogs page
        this.router.navigate(['/dogs']);
      }
    });
  }
}
