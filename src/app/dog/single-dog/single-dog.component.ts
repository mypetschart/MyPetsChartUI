import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Dog } from '../../_models/interfaces';

@Component({
  selector: 'app-single-dog',
  templateUrl: './single-dog.component.html',
  styleUrls: ['./single-dog.component.scss']
})
export class SingleDogComponent implements OnInit {
  @Input() dog: Dog | undefined;

  imagePath: SafeResourceUrl = '';
  hasImage = false;
  female = false;

  constructor(private _sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    if (this.dog?.type === 'dam'){
      this.female = true;
    }

    if (this.dog!.photos.length > 0){
      const imageBase64 = this.dog?.photos[0];
      this.imagePath = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + imageBase64);

      this.hasImage = true;
    }
  }

}
