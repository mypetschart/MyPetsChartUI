import { HttpClient, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

export interface Image {
  content: {
    imageUrl: string
  };
}

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  // apiUrl = environment.apiUrl;
  apiUrl = 'http://ec2-3-88-21-48.compute-1.amazonaws.com:9090';

  constructor(private http: HttpClient) { }

  // upload(formData: FormData, resetFunction: any): Observable<HttpEvent<Image>>{
  //   return this.http.post<Image>(this.apiUrl + 'api/v1/image', formData, {
  //     reportProgress: true,
  //     observe: 'events'
  //   }).pipe(
  //     finalize(() => resetFunction)
  //   );
  // }

  upload(formData: FormData): Observable<Image> {
    return this.http.post<Image>(this.apiUrl + 'api/v1/image', formData)
      .pipe(
        // catchError(this.handleError('addHero', hero))
      );
  }
}
