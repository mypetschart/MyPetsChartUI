import { HttpClient, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(private http: HttpClient) { }

  upload(formData: FormData, resetFunction: any): Observable<HttpEvent<Object>>{
    return this.http.post(environment.apiUrl + 'upload/', formData, {
      reportProgress: true,
      observe: 'events'
    }).pipe(
      finalize(() => resetFunction)
    );
  }
}
