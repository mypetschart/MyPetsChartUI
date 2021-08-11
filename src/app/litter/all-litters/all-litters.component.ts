import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { fadeIn } from 'src/app/transition-animations';
import { Litter } from 'src/app/_models/interfaces';
import { LitterService } from 'src/app/_services/litter.service';

@Component({
  selector: 'app-all-litters',
  templateUrl: './all-litters.component.html',
  styleUrls: ['./all-litters.component.scss'],
  animations: [fadeIn]
})
export class AllLittersComponent implements OnInit {
  litters$: Observable<Litter[]>;
  loadingLitters$: Observable<boolean>;

  constructor(private litterService: LitterService) {
    this.litters$ = this.litterService.entities$;
    this.loadingLitters$ = this.litterService.loading$;
  }

  ngOnInit(): void {
    this.litterService.getAll();
  }

}
