import { Component, ElementRef, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
import { AddCardService } from '../../services/add-card.service';

@Component({
  selector: 'app-roulette-senador',
  templateUrl: './roulette-senador.component.html',
  styleUrls: ['./roulette-senador.component.css']
})
export class RouletteSenadorComponent {
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

  clase:string = 'Senador';

  cartas = [
    {
      id: 1,
      name: 'Bail Organa',
      url: './../../../../../../assets/image/bail-organa.webp',
      tipo: `${this.clase}`
    },
    {
      id: 2,
      name: 'Mon Mothma',
      url: './../../../../../../assets/image/mon-motha.webp',
      tipo: `${this.clase}`
    },
    {
      id: 3,
      name: 'Padmé Amidala',
      url: './../../../../../../assets/image/padme-amidala.webp',
      tipo: `${this.clase}`
    },
    {
      id: 4,
      name: 'Mas Amedda',
      url: './../../../../../../assets/image/mas-amedda.webp',
      tipo: `${this.clase}`
    },
    {
      id: 5,
      name: 'Orn Free Taa',
      url: './../../../../../../assets/image/orn-free-taa.webp',
      tipo: `${this.clase}`
    },
    {
      id: 6,
      name: 'Tikkes',
      url: './../../../../../../assets/image/tikkes.webp',
      tipo: `${this.clase}`
    },
    {
      id: 7,
      name: 'Riyo Chuchi',
      url: './../../../../../../assets/image/riyo-chuchi.webp',
      tipo: `${this.clase}`
    },
    {
      id: 8,
      name: 'Grebleips',
      url: './../../../../../../assets/image/grebleips.webp',
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
