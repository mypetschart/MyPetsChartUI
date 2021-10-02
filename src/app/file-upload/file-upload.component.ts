import { HttpEventType } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { FileUploadService, PostResponseImage } from '../_services/file-upload.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {
  @Output() fileUploadEvent = new EventEmitter<PostResponseImage>();

  formData = new FormData();
  fileNames = [''];
  files = [];
  faUpload = faUpload;
  uploading = false;

  constructor(private fileUploadService: FileUploadService) { }

  ngOnInit(): void {
  }

  onFileSelected(event: any): void {
    this.uploading = true;

    for (const file of event.target.files) {
      if (file) {
        this.fileNames.push(file.name);

        // Upload it via the file uploader service
        this.formData.append('images', file);
       }
    }

    this.fileUploadService.upload(this.formData).subscribe(
      (resp) => {
        console.log(resp);
        this.uploading = false;
        this.fileUploadEvent.emit(resp);
      }
    );
  }

  removeFile(fileName: string): void {
    // this.formData.delete('images', fileName);
  }

}
