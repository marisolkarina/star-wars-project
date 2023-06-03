import { Component, OnInit } from '@angular/core';
import { AddCardService } from '../buy-card/roulette/services/add-card.service';
import Card from '../buy-card/roulette/interfaces/cards-interface';

// export interface Carta {
//   cols: number;
//   rows: number;
//   text: string;
// }

@Component({
  selector: 'app-my-cards',
  templateUrl: './my-cards.component.html',
  styleUrls: ['./my-cards.component.css']
})
export class MyCardsComponent implements OnInit {

  cards!: Card[];

  constructor(
    private addCardService: AddCardService
  ) {}

  ngOnInit(): void {
    this.addCardService.getCards().subscribe(cards => {
      console.log(cards);
      this.cards = cards;
    })
  }
  // cartas: Carta[] = [
  //   {text: 'One', cols: 1, rows: 1},
  //   {text: 'Two', cols: 1, rows: 1},
  //   {text: 'Three', cols: 1, rows: 1},
  //   {text: 'Four', cols: 1, rows: 1},
  // ];
}
