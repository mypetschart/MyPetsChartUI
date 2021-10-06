import { Component, OnInit, Input } from '@angular/core';
import { Dog, Litter } from 'src/app/_models/interfaces';
import { fadeIn } from 'src/app/transition-animations';
import { Observable } from 'rxjs';
import { DogService } from 'src/app/_services/dog.service';
import { FileUploadService } from 'src/app/_services/file-upload.service';

@Component({
  selector: 'app-single-litter',
  templateUrl: './single-litter.component.html',
  styleUrls: ['./single-litter.component.scss'],
  animations: [fadeIn]
})
export class SingleLitterComponent implements OnInit {
  @Input() litter: Litter | undefined;

  dam$: Observable<Dog> = new Observable<Dog>();
  sire$: Observable<Dog> = new Observable<Dog>();
  imagePath = '';

  constructor(private dogService: DogService, private fileService: FileUploadService) { }

  ngOnInit(): void {
    this.fileService.download(this.litter!.photos[0]).subscribe(
      (fileName) => {
        this.imagePath = fileName.content.imageUrl;
      }
    );

    this.dam$ = this.dogService.getByKey(this.litter?.dam);
    this.sire$ = this.dogService.getByKey(this.litter?.sire);
  }

}
