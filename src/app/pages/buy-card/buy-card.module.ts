import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyCardComponent } from './buy-card.component';
import { RouletteComponent } from './roulette/roulette.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RouletteAlienigenaComponent } from './roulette/other-roulette/roulette-alienigena/roulette-alienigena.component';
import { RouletteSenadorComponent } from './roulette/other-roulette/roulette-senador/roulette-senador.component';
import { RouletteAndroideComponent } from './roulette/other-roulette/roulette-androide/roulette-androide.component';
import { RouletteContrabandistaComponent } from './roulette/other-roulette/roulette-contrabandista/roulette-contrabandista.component';
import { RouletteImperialComponent } from './roulette/other-roulette/roulette-imperial/roulette-imperial.component';
import { RouletteRebeldeComponent } from './roulette/other-roulette/roulette-rebelde/roulette-rebelde.component';
import { RouletteSithComponent } from './roulette/other-roulette/roulette-sith/roulette-sith.component';
import { RouletteJediComponent } from './roulette/other-roulette/roulette-jedi/roulette-jedi.component';


@NgModule({
  declarations: [
    BuyCardComponent,
    RouletteComponent,
    RouletteAlienigenaComponent,
    RouletteSenadorComponent,
    RouletteAndroideComponent,
    RouletteContrabandistaComponent,
    RouletteImperialComponent,
    RouletteRebeldeComponent,
    RouletteSithComponent,
    RouletteJediComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatButtonModule
  ],
  exports: [
    BuyCardComponent
  ]
})
export class BuyCardModule { }
