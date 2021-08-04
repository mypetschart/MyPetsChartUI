import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { DogBuilder } from '../models/builders/dog.builder';
import { Dog } from '../models/interfaces';
import { DogService } from '../services/dog.service';
import { fadeInAndOut } from '../transition-animations';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.scss'],
  animations: [fadeInAndOut]
})
export class DogComponent implements OnInit {
  // @Input() dogs: Dog | undefined;
  dogName = '';

  dogs$: Observable<Dog[]>;
  loadingDogs$: Observable<boolean>;

  constructor(
    private route: ActivatedRoute,
    private dogService: DogService
  ) {
    this.dogs$ = dogService.entities$;
    this.loadingDogs$ = dogService.loading$;
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.dogName = params['dog'];
    });

    const queryParams = {
      name: this.dogName
    };

    this.dogService.getWithQuery(queryParams);
  }

}
