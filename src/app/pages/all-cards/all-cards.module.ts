import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllCardsComponent } from './all-cards.component';
import { RouterModule } from '@angular/router';
import { CardsDetalleComponent } from './cards-detalle/cards-detalle.component';



@NgModule({
  declarations: [
    AllCardsComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AllCardsComponent
  ]
})
export class AllCardsModule { }
