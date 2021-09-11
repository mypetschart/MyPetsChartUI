import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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


@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.scss'],
  animations: [fadeIn]
})
export class DogComponent implements OnInit {
  dogId = '';
  dogType = '';

  dog$: Observable<Dog> = new Observable<Dog>();
  dam: Dam | undefined;
  sire: Sire | undefined;
  puppy: Puppy | undefined;
  tasks$: Observable<Task[]> = new Observable<Task[]>();

  // CHART
  multi = multi;

  imagePath: SafeResourceUrl = '';

  constructor(
    private route: ActivatedRoute,
    private dogService: DogService,
    private taskService: TaskService,
    private _sanitizer: DomSanitizer,
  ) {
    this.route.params.subscribe(params => {
      this.dogId = params['id'];
    });

    this.dog$ = this.dogService.getByKey(this.dogId);

    this.dog$.subscribe(
      dog => {
        this.dogType = dog.type;
        const imageBase64 = dog.photos[1];
        this.imagePath = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + imageBase64);

        switch(dog.type){
          case 'dam':
            this.loadDam(dog);
            break;
          case 'sire':
            this.sire = new SireBuilder(dog).build();
            break;
          case 'puppy':
            this.puppy = new PuppyBuilder(dog).build();
            break;
        }
      }
    );
  }

  ngOnInit(): void { }

  loadDam(dog: Dog): void {
    this.dam = new DamBuilder(dog).build();

    const queryParams = {
      refId: this.dogId
    };

    this.tasks$ = this.taskService.getWithQuery(queryParams);
  }
}
