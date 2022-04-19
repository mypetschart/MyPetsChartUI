import { HttpClient, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../_models/interfaces';

export interface GetResponseImage {
  content: ImageContent;
}

export interface PostResponseImage{
  content: ImageContent[];
}

interface ImageContent {
  imageUrl: string;
  fileName: string;
}

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  // apiUrl = environment.apiUrl;
  userId = 1;
  // user$ = this.store.select(state => state.user).subscribe(i => this.userId = i.id);

  apiUrl = '/api';

  constructor(
    private http: HttpClient,
    private store: Store<{ user: User }>
    ) {
      // this.store.dispatch({ type: '[User Profile] Get User' });
    }

  // upload(formData: FormData, resetFunction: any): Observable<HttpEvent<Image>>{
  //   return this.http.post<Image>(this.apiUrl + 'api/v1/image', formData, {
  //     reportProgress: true,
  //     observe: 'events'
  //   }).pipe(
  //     finalize(() => resetFunction)
  //   );
  // }

  upload(formData: FormData): Observable<PostResponseImage> {
    return this.http.post<PostResponseImage>(
      this.apiUrl + '/v1/image/' + this.userId, formData
      )
      .pipe(
        // catchError(this.handleError('addHero', hero))
      );
  }

  download(fileName: string): Observable<GetResponseImage> {
    return this.http.get<GetResponseImage>(
      this.apiUrl + '/v1/image/' + this.userId + '/' + fileName
    );
  }}
