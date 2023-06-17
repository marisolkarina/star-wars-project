import { Component, ElementRef, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
import { AddCardService } from './services/add-card.service';
import Card from './interfaces/cards-interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-roulette',
  templateUrl: './roulette.component.html',
  styleUrls: ['./roulette.component.css']
})


export class RouletteComponent {

  giros:number = 0;
  vueltas = 1;
  valor:any;
  @ViewChild('ruleta') ruleta!: ElementRef;
  @ViewChild('audio') audio!: ElementRef;

  constructor(
    private addCardService: AddCardService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
  
  }

  girar() {
    if (this.giros < this.vueltas) {
      let rand = Math.random()*7200;
      this.calcular(rand);
      this.giros++;
      this.audio.nativeElement.play();
    }
  }

  showRoulette: boolean = true;

  cartas = [
    {
      id: 1,
      name: 'Alienígenas'
    },
    {
      id: 2,
      name: 'Senadores'
    },
    {
      id: 3,
      name: 'Androides'
    },
    {
      id: 4,
      name: 'Contrabandistas'
    },
    {
      id: 5,
      name: 'Imperiales'
    },
    {
      id: 6,
      name: 'Rebeldes'
    },
    {
      id: 7,
      name: 'Sith'
    },
    {
      id: 8,
      name: 'Jedi'
    }
  ]

  premio(premios:string) {
    Swal.fire({
      icon: 'success',
      title: `Puedes ganar una carta tipo: ${premios}`,
    })
  
  }

  calcular(rand:any) {
    this.valor = rand/360;
    this.valor = (this.valor - parseInt(this.valor.toString().split(".")[0]))*360;
    // console.log(this.valor);
    this.ruleta.nativeElement.style.transform = `rotate(${rand}deg)`;

    setTimeout(() => {
      switch (true) {
        case this.valor > 0 && this.valor <= 45:
          this.premio('Alienígenas');
          this.router.navigate(['alienigenas'], {
            relativeTo: this.activatedRoute,
          })
          this.showRoulette = false;
          break;
        case this.valor > 45 && this.valor <= 90:
          this.premio('Senadores'); 
          this.router.navigate(['senadores'], {
            relativeTo: this.activatedRoute,
          })
          this.showRoulette = false;
          break;
        case this.valor > 90 && this.valor <= 135:
          this.premio('Androides');
          this.router.navigate(['androides'], {
            relativeTo: this.activatedRoute,
          })
          this.showRoulette = false;
          break;
        case this.valor > 135 && this.valor <= 180:
          this.premio('Contrabandistas');
          this.router.navigate(['contrabandistas'], {
            relativeTo: this.activatedRoute,
          })
          this.showRoulette = false;
          break;
        case this.valor > 180 && this.valor <= 225:
          this.premio('Imperiales');
          this.router.navigate(['imperiales'], {
            relativeTo: this.activatedRoute,
          })
          this.showRoulette = false;
          break;
        case this.valor > 225 && this.valor <= 270:
          this.premio('Rebeldes'); 
          this.router.navigate(['rebeldes'], {
            relativeTo: this.activatedRoute,
          })
          this.showRoulette = false;
          break;
        case this.valor > 270 && this.valor <= 315:
          this.premio('Sith'); 
          this.router.navigate(['sith'], {
            relativeTo: this.activatedRoute,
          })
          this.showRoulette = false;
          break;
        case this.valor > 315 && this.valor <= 360:
          this.premio('Jedi');
          this.router.navigate(['jedi'], {
            relativeTo: this.activatedRoute,
          })
          this.showRoulette = false;
          break;
      }
    }, 6000)

  }
}
