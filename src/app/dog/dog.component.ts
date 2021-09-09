import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Dam, Dog, Litter, Puppy, Sire } from '../_models/interfaces';
import { DogService } from '../_services/dog.service';
import { fadeIn } from '../transition-animations';
import { LitterService } from '../_services/litter.service';
import { DamBuilder } from '../_models/builders/dam.builder';
import { SireBuilder } from '../_models/builders/sire.builder';
import { PuppyBuilder } from '../_models/builders/puppy.builder';
import { DogBuilder } from '../_models/builders/dog.builder';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { multi } from './data';


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
  dogAsync: Dog = new DogBuilder().build();

  // CHART
  // multi: any[];
  view: any[] = [700, 300];

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Year';
  yAxisLabel: string = 'Population';
  timeline: boolean = true;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor(
    private route: ActivatedRoute,
    private dogService: DogService
  ) {
    Object.assign(this, { multi });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.dogId = params['id'];
    });

    this.dog$ = this.dogService.getByKey(this.dogId);

    this.dog$.subscribe(
      dog => {
        console.log('DOG!' + dog);
        this.dogAsync = dog;
        this.dogType = dog.type;
      }
    );
  }
}
