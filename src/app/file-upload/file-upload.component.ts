import { HttpEventType } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { FileUploadService, Image } from '../_services/file-upload.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {
  @Output() fileUploadEvent = new EventEmitter<Image>();

  fileNames = [''];
  files = [''];
  uploadProgress = 0;
  uploadSub: Subscription = new Subscription();
  faUpload = faUpload;

  constructor(private fileUploadService: FileUploadService) { }

  ngOnInit(): void {
  }

  onFileSelected(event: any): void {
    for (const file of event.target.files) {
      if (file) {
        this.fileNames.push(file.name);

        // TODO hacky hack hackkkk Until we get the backend hooked up, convert the file to Base64 and shove into json-server photos string
        // this.getBase64(file)
        //   .then(
        //     res => {
        //       this.files.push(res);
        //     }
        //   );

        // Upload it via the file uploader service
        const formData = new FormData();
        formData.append('image', file);

        this.fileUploadService.upload(formData).subscribe(
          (resp) => {
            this.fileUploadEvent.emit(resp);
          }
        );

        // this.uploadSub = this.fileUploadService.upload(formData, this.reset()).subscribe(
        //   (subEvent) => {
        //     if (subEvent.type === HttpEventType.UploadProgress) {
        //       this.uploadProgress = Math.round(100 * (subEvent.loaded / subEvent.total!)); // TODO check Content-Length header??
        //     }
        //  });

       }
    }
  }

  cancelUpload(): void {
    this.uploadSub.unsubscribe();
    this.reset();
  }

  reset(): void {
    this.uploadProgress = 0;
    this.uploadSub = new Subscription();
  }

  // getBase64(file: File): Promise<string> {
  //   return new Promise((resolve, reject) => {
  //     const reader = new FileReader();
  //     reader.readAsDataURL(file);
  //     reader.onload = () => {
  //       let encoded = reader.result!.toString().replace(/^data:(.*,)?/, '');
  //       if ((encoded.length % 4) > 0) {
  //         encoded += '='.repeat(4 - (encoded.length % 4));
  //       }
  //       resolve(encoded);
  //     };
  //     reader.onerror = error => reject(error);
  //   });
  // }

}
