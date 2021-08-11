import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Dog } from '../_models/interfaces';
import { DogService } from '../_services/dog.service';
import { fadeIn } from '../transition-animations';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.scss'],
  animations: [fadeIn]
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
