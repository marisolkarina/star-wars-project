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
import { RouletteAlienigenaComponent } from '../pages/buy-card/roulette/other-roulette/roulette-alienigena/roulette-alienigena.component';
import { RouletteSenadorComponent } from '../pages/buy-card/roulette/other-roulette/roulette-senador/roulette-senador.component';
import { RouletteAndroideComponent } from '../pages/buy-card/roulette/other-roulette/roulette-androide/roulette-androide.component';
import { RouletteContrabandistaComponent } from '../pages/buy-card/roulette/other-roulette/roulette-contrabandista/roulette-contrabandista.component';
import { RouletteImperialComponent } from '../pages/buy-card/roulette/other-roulette/roulette-imperial/roulette-imperial.component';
import { RouletteRebeldeComponent } from '../pages/buy-card/roulette/other-roulette/roulette-rebelde/roulette-rebelde.component';
import { RouletteSithComponent } from '../pages/buy-card/roulette/other-roulette/roulette-sith/roulette-sith.component';
import { RouletteJediComponent } from '../pages/buy-card/roulette/other-roulette/roulette-jedi/roulette-jedi.component';
import { CardsDetalleComponent } from '../pages/all-cards/cards-detalle/cards-detalle.component';


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
        component: AllCardsComponent,
        children: [
          {
            path:'',
            component: AllCardsComponent
          },
          {
            path: ':ident',
            component: CardsDetalleComponent
          }
        ]
      },
      {
        path: 'buy-card',
        component: BuyCardComponent,
        children: [
          {
            path: 'roulette',
            component: RouletteComponent,
            children: [
              {
                path: 'alienigenas',
                component: RouletteAlienigenaComponent
              },
              {
                path: 'senadores',
                component: RouletteSenadorComponent
              },
              {
                path: 'androides',
                component: RouletteAndroideComponent
              },
              {
                path: 'contrabandistas',
                component: RouletteContrabandistaComponent
              },
              {
                path: 'imperiales',
                component: RouletteImperialComponent
              },
              {
                path: 'rebeldes',
                component: RouletteRebeldeComponent
              },
              {
                path: 'sith',
                component: RouletteSithComponent
              },
              {
                path: 'jedi',
                component: RouletteJediComponent
              }
            ]
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
