import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import CardsUniverse from '../interfaces/cards-universe';

@Injectable({
  providedIn: 'root'
})
export class AllCardsService {

  constructor(private firestore: Firestore) { }

  getCards(): Observable<CardsUniverse[]> {
    //alienígenas
    const cardRef = collection(this.firestore, 'cards-of-universe');
    return collectionData(cardRef, { idField: 'id' }) as Observable<CardsUniverse[]>;
  }
}
