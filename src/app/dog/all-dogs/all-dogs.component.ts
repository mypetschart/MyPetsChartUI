import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { fadeIn } from 'src/app/transition-animations';
import { Dog } from 'src/app/_models/interfaces';
import { DogService } from 'src/app/_services/dog.service';

@Component({
  selector: 'app-all-dogs',
  templateUrl: './all-dogs.component.html',
  styleUrls: ['./all-dogs.component.scss'],
  animations: [fadeIn]
})
export class AllDogsComponent implements OnInit {

  dogs$: Observable<Dog[]>;
  loadingDogs$: Observable<boolean>;

  constructor(private dogService: DogService) {
    this.dogs$ = this.dogService.entities$;
    this.loadingDogs$ = this.dogService.loading$;
  }

  ngOnInit(): void {
    this.dogService.getAll();
  }

}
