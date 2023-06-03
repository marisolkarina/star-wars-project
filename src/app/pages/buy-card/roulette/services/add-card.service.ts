import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData } from '@angular/fire/firestore';
import Card from '../interfaces/cards-interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddCardService {

  constructor(private firestore: Firestore) { }

  addCard(card: Card) {
    const placeRef = collection(this.firestore, 'cards');
    return addDoc(placeRef, card);
  }

  getCards(): Observable<Card[]> {
    const cardRef = collection(this.firestore, 'cards');
    return collectionData(cardRef, { idField: 'id' }) as Observable<Card[]>;
  }
}
