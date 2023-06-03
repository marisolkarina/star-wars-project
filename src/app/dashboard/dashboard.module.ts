import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { AllCardsComponent } from '../pages/all-cards/all-cards.component';
import { BuyCardComponent } from '../pages/buy-card/buy-card.component';
import { MyCardsComponent } from '../pages/my-cards/my-cards.component';
import { DashboardComponent } from './dashboard.component';
import { RouletteComponent } from '../pages/buy-card/roulette/roulette.component';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,

    RouterModule.forChild([
      {
        path: 'all-cards',
        component: AllCardsComponent
      },
      {
        path: 'buy-card',
        component: BuyCardComponent,
        children: [
          {
            path: 'roulette',
            component: RouletteComponent
          }
        ]
      },
      {
        path: 'my-cards',
        component: MyCardsComponent
      }
    ])
  ]
})
export class DashboardModule { }
