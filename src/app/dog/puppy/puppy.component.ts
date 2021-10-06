import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DamBuilder } from 'src/app/_models/builders/dam.builder';
import { DogBuilder } from 'src/app/_models/builders/dog.builder';
import { PuppyBuilder } from 'src/app/_models/builders/puppy.builder';
import { SireBuilder } from 'src/app/_models/builders/sire.builder';
import { Dam, Dog, Litter, Puppy, Sire } from 'src/app/_models/interfaces';
import { DogService } from 'src/app/_services/dog.service';
import { LitterService } from 'src/app/_services/litter.service';

@Component({
  selector: 'app-puppy',
  templateUrl: './puppy.component.html',
  styleUrls: ['./puppy.component.scss']
})
export class PuppyComponent implements OnInit {
  @Input() puppy!: Dog;

  litter$: Observable<Litter> = new Observable<Litter>();
  dam$: Observable<Dog> = new Observable<Dog>();
  sire$: Observable<Dog> = new Observable<Dog>();

  // d = new DogBuilder().build();
  // dam = new DamBuilder(this.d).build();
  // sire = new SireBuilder(this.d).build();

  constructor(
    private litterService: LitterService,
    private dogService: DogService
    ) {
      const puppy = new PuppyBuilder(this.puppy).build();
      this.litter$ = this.litterService.getByKey(puppy.litter);

      // Get the dam and sire for this litter
      this.litter$.subscribe(
        (litter) => {
          const damId = litter.dam;
          const sireId = litter.sire;

          this.dam$ = this.dogService.getByKey(damId);
          this.sire$ = this.dogService.getByKey(sireId);
          // const dam = this.dogService.getByKey(damId);
          // dam.subscribe(
          //   damAsync => {
          //     this.dam = new DamBuilder(damAsync).build();
          //   }
          // );

          // const sire = this.dogService.getByKey(sireId);
          // sire.subscribe(
          //   sireAsync => {
          //     this.sire = new SireBuilder(sireAsync).build();
          //   }
          // );
        }
      );
    }

  ngOnInit(): void { }

}
