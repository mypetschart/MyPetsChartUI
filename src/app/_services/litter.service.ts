import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Litter } from '../_models/interfaces';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from '@ngrx/data';

@Injectable({
  providedIn: 'root'
})
export class LitterService extends EntityCollectionServiceBase<Litter> {

  constructor(
    serviceElementsFactory: EntityCollectionServiceElementsFactory,
    private http: HttpClient
    ) {
    super('Litter', serviceElementsFactory);
  }
}
