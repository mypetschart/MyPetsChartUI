import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { fadeIn, fadeIn300, fadeIn450, fadeIn600 } from 'src/app/transition-animations';
import { Dog, Litter } from 'src/app/_models/interfaces';
import { DogService } from 'src/app/_services/dog.service';
import { LitterService } from 'src/app/_services/litter.service';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.scss'],
  animations: [fadeIn, fadeIn300, fadeIn450, fadeIn600]
})
export class WidgetsComponent implements OnInit {
  puppyNum = 0;
  damsInHeat = 0;

  dogs$: Observable<Dog[]>;
  litters$: Observable<Litter[]>;

  constructor(
    private dogService: DogService,
    private litterService: LitterService) {
    this.dogs$ = this.dogService.entities$;
    this.litters$ = this.litterService.entities$;
  }

  ngOnInit(): void {
    this.dogService.getAll();
    this.litterService.getAll();

    // Subscribe for puppy number
    this.dogs$.subscribe(
      (dogs) => {
        this.puppyNum = dogs.filter((dog: Dog) => dog.type === 'puppy').length;
      }
    );

    // Subscribe for dams in heat
    this.dogs$.subscribe(
      (dogs) => {
        this.damsInHeat = dogs.filter((dog: Dog) => dog.type === 'dam').length;
      }
    );
  }

}
