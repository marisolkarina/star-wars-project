import { Component, ElementRef, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
import { AddCardService } from '../../services/add-card.service';

@Component({
  selector: 'app-roulette-contrabandista',
  templateUrl: './roulette-contrabandista.component.html',
  styleUrls: ['./roulette-contrabandista.component.css']
})
export class RouletteContrabandistaComponent {
  giros:number = 0;
  vueltas = 1;
  valor:any;
  @ViewChild('ruleta') ruleta!: ElementRef;
  @ViewChild('audio') audio!: ElementRef;
  
  constructor(
    private addCardService: AddCardService,
  ) {}
  
  girar() {
    if (this.giros < this.vueltas) {
      let rand = Math.random()*7200;
      this.calcular(rand);
      this.giros++;
      this.audio.nativeElement.play();
    }
  }

  clase:string = 'Contrabandista';

  cartas = [
    {
      id: 1,
      name: 'Tobias Beckett',
      url: './../../../../../../assets/image/tobias-beckett.webp',
      tipo: `${this.clase}`
    },
    {
      id: 2,
      name: 'Hondo Ohnaka',
      url: './../../../../../../assets/image/hondo-ohnaka.webp',
      tipo: `${this.clase}`
    },
    {
      id: 3,
      name: 'DJ (Dont Join)',
      url: './../../../../../../assets/image/dj.webp',
      tipo: `${this.clase}`
    },
    {
      id: 4,
      name: 'Quinlan Vos',
      url: './../../../../../../assets/image/Quinlan_Vos.webp',
      tipo: `${this.clase}`
    },
    {
      id: 5,
      name: 'L3-37',
      url: './../../../../../../assets/image/L3-37.webp',
      tipo: `${this.clase}`
    },
    {
      id: 6,
      name: 'Maz Kanata',
      url: './../../../../../../assets/image/Maz_Kanata.webp',
      tipo: `${this.clase}`
    },
    {
      id: 7,
      name: 'Beilert Valance',
      url: './../../../../../../assets/image/Beilert-Valance.webp',
      tipo: `${this.clase}`
    },
    {
      id: 8,
      name: 'Landos Luck',
      url: './../../../../../../assets/image/landos-luck.webp',
      tipo: `${this.clase}`
    }
  ]

  premio(premios:string, url: string) {
    Swal.fire({
      icon: 'success',
      title: `Carta ganada: ${premios}`,
      imageUrl: `${url}`,
      imageHeight: 300,
      imageAlt: 'Carta'
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
          this.premio(this.cartas[0].name, this.cartas[0].url);
          this.addCardService.addCard(this.cartas[0]); 
          break;
        case this.valor > 45 && this.valor <= 90:
          this.premio(this.cartas[1].name, this.cartas[1].url);
          this.addCardService.addCard(this.cartas[1]); 
          break;
        case this.valor > 90 && this.valor <= 135:
          this.premio(this.cartas[2].name, this.cartas[2].url);
          this.addCardService.addCard(this.cartas[2]);
          break;
        case this.valor > 135 && this.valor <= 180:
          this.premio(this.cartas[3].name, this.cartas[3].url);
          this.addCardService.addCard(this.cartas[3]);
          break;
        case this.valor > 180 && this.valor <= 225:
          this.premio(this.cartas[4].name, this.cartas[4].url);
          this.addCardService.addCard(this.cartas[4]);
          break;
        case this.valor > 225 && this.valor <= 270:
          this.premio(this.cartas[5].name, this.cartas[5].url);
          this.addCardService.addCard(this.cartas[5]);
          break;
        case this.valor > 270 && this.valor <= 315:
          this.premio(this.cartas[6].name, this.cartas[6].url);
          this.addCardService.addCard(this.cartas[6]);
          break;
        case this.valor > 315 && this.valor <= 360:
          this.premio(this.cartas[7].name, this.cartas[7].url);
          this.addCardService.addCard(this.cartas[7]);
          break;
      }
    }, 6000)

  }
}
