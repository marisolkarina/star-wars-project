import { Component } from '@angular/core';
import CardsUniverse from './interfaces/cards-universe';
import { AllCardsService } from './services/all-cards.service';

@Component({
  selector: 'app-all-cards',
  templateUrl: './all-cards.component.html',
  styleUrls: ['./all-cards.component.css']
})
export class AllCardsComponent {

  allCards!: CardsUniverse[];

  constructor(
    private allCardsService: AllCardsService
  ) {}

  ngOnInit(): void {
    this.allCardsService.getCards().subscribe(cardsUniverse => {
      console.log(cardsUniverse);
      this.allCards = cardsUniverse;
    })
  }
}
