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


@NgModule({
  declarations: [
    BuyCardComponent,
    RouletteComponent,
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
