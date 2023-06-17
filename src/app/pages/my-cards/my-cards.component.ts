import { Component, OnInit } from '@angular/core';
import { AddCardService } from '../buy-card/roulette/services/add-card.service';
import Card from '../buy-card/roulette/interfaces/cards-interface';



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

}
