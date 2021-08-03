import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Litter } from '../models/interfaces';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LitterService {

  private apiUrl = environment.apiUrl + '/litters';

  constructor(private http: HttpClient) { }

  getLitters(): Observable<Litter[]> {
    return this.http.get<Litter[]>(this.apiUrl);
  }

  addLitter(litter: Litter): Observable<Litter> {
    return this.http.post<Litter>(this.apiUrl, litter);
  }
}
