import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  dog = new DogBuilder().build();
  dogName = '';

  constructor(
    private route: ActivatedRoute,
    private dogService: DogService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.dogName = params['dog'];
    });

    this.dogService.getDogByName(this.dogName).subscribe(
      (dogs) => {
        this.dog = dogs;
      }
    );
  }

}
