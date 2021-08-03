import { Component, OnInit, Input } from '@angular/core';
import { Litter } from 'src/app/models/interfaces';

@Component({
  selector: 'app-single-litter',
  templateUrl: './single-litter.component.html',
  styleUrls: ['./single-litter.component.scss']
})
export class SingleLitterComponent implements OnInit {
  @Input() litter: Litter | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
