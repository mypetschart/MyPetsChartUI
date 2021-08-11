import { Component, OnInit, Input } from '@angular/core';
import { Litter } from 'src/app/_models/interfaces';
import { fadeIn } from 'src/app/transition-animations';

@Component({
  selector: 'app-single-litter',
  templateUrl: './single-litter.component.html',
  styleUrls: ['./single-litter.component.scss'],
  animations: [fadeIn]
})
export class SingleLitterComponent implements OnInit {
  @Input() litter: Litter | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
