import { Component } from '@angular/core';
import CardsUniverse from './interfaces/cards-universe';
import { AllCardsService } from './services/all-cards.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-all-cards',
  templateUrl: './all-cards.component.html',
  styleUrls: ['./all-cards.component.css']
})
export class AllCardsComponent {

  allCards!: CardsUniverse[];


  constructor(
    private allCardsService: AllCardsService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.allCardsService.getCards().subscribe(cardsUniverse => {
      console.log(cardsUniverse);
      this.allCards = cardsUniverse;
    })
  }

  verDetalle(cartaId:number): void {
    this.router.navigate([cartaId], {
      relativeTo: this.activatedRoute,
    });
    console.log('link');
  }

}
