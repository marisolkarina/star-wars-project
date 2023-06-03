import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

interface Mes {
  month: number;
}

interface Anio {
  year: number;
}

@Component({
  selector: 'app-buy-card',
  templateUrl: './buy-card.component.html',
  styleUrls: ['./buy-card.component.css']
})
export class BuyCardComponent {

  controlName = new FormControl('', [Validators.required]);
  controlNumero = new FormControl('', [Validators.required]);
  controlMes = new FormControl<Mes | null>(null, Validators.required);
  controlAnio = new FormControl<Anio | null>(null, Validators.required);
  controlCvv = new FormControl('', [Validators.required]);

  meses: Mes[] = [
    {month: 1},
    {month: 2},
    {month: 3},
    {month: 4},
    {month: 5},
    {month: 6},
    {month: 7},
    {month: 8},
    {month: 9},
    {month: 10},
    {month: 11},
    {month: 12},
  ];

  anios: Anio[] = [
    {year: 2023},
    {year: 2024},
    {year: 2025},
    {year: 2026},
    {year: 2027},
    {year: 2028},
    {year: 2029},
    {year: 2031},
    {year: 2032},
    {year: 2033},
    {year: 2034},
    {year: 2035},
  ]

  myForm = new FormGroup({
    name: this.controlName,
    numero: this.controlNumero,
    mes: this.controlMes,
    anio: this.controlAnio,
    cvv: this.controlCvv
  });

  showForm: boolean = true;
  
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
   ) { }

  verRuleta():void {
    if(this.myForm.valid) {
      this.router.navigate(['roulette'], {
        relativeTo: this.activatedRoute,
      })
      this.showForm = false;
    } else {
      this.myForm.markAllAsTouched();
      Swal.fire({
        icon: 'error',
        title: 'Pago inválido'
      })
    }
    
  }

}
