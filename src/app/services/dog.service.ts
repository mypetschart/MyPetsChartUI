import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Dog } from '../models/interfaces';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DogService {
  private apiUrl = environment.apiUrl + '/dogs';

  constructor(private http: HttpClient) { }

  getDogs(): Observable<Dog[]> {
    return this.http.get<Dog[]>(this.apiUrl);
  }

  getDogByName(name: string): Observable<Dog> {
    return this.http.get<Dog>(this.apiUrl + '/' + name);
  }

  addDog(dog: Dog): Observable<Dog> {
    return this.http.post<Dog>(this.apiUrl, dog);
  }
}
