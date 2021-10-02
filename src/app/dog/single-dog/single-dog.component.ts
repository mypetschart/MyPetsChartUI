import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { FileUploadService } from 'src/app/_services/file-upload.service';
import { Dog } from '../../_models/interfaces';

@Component({
  selector: 'app-single-dog',
  templateUrl: './single-dog.component.html',
  styleUrls: ['./single-dog.component.scss']
})
export class SingleDogComponent implements OnInit {
  @Input() dog: Dog | undefined;

  imagePath = '';
  female = false;

  constructor(private _sanitizer: DomSanitizer, private fileService: FileUploadService) { }

  ngOnInit(): void {
    if (this.dog?.type === 'dam'){
      this.female = true;
    }

    if (this.dog!.photos.length > 0){
      this.fileService.download(this.dog!.photos[0]).subscribe(
        (fileName) => {
          this.imagePath = fileName.content.imageUrl;
          console.log(this.imagePath);
        }
      );
    }
  }

}
