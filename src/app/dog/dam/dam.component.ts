import { Component, Input, OnInit } from '@angular/core';
import { DamBuilder } from 'src/app/_models/builders/dam.builder';
import { DogBuilder } from 'src/app/_models/builders/dog.builder';
import { Dam, Dog } from 'src/app/_models/interfaces';

@Component({
  selector: 'app-dam',
  templateUrl: './dam.component.html',
  styleUrls: ['./dam.component.scss']
})
export class DamComponent implements OnInit {
  private _dam: Dog | undefined;
  @Input() set dam(value: Dog | undefined) {
    this._dam = value;
  }

  // get method for childdata (for *nfFor in template)
  get dam() {
    return this._dam;
  }

  dammmm: Dam;

  constructor() {
    this.dammmm = this.dam as Dam;
    console.log("DAM:");
    console.log(this.dam);
    console.log(this.dammmm);
  }

  ngOnInit(): void {
    // console.log('pre:' + JSON.stringify(this.dam));
    // this.dam = new DogBuilder()
    //   .id(this.dam?.id)
    //   .type(this.dam?.type)
    //   .name(this.dam?.name)
    //   .breed(this.dam?.breed)
    //   .generation(this.dam?.generation)
    //   .dob(this.dam?.dob)
    //   .color(this.dam?.color)
    //   .weight(this.dam?.weight)
    //   .microchip(this.dam?.microchip)
    //   .photos(this.dam?.photos)
    //   .build();

    // const dammmm = this.dam as Dam;
    // console.log('pre:' + JSON.stringify(this.dam));
    // this.dammmm = new DamBuilder(this.dam as Dam)
    //   .heat(dam.heat)
    //   .build();
  }

}
