import { Component, ElementRef, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
import { AddCardService } from '../../services/add-card.service';

@Component({
  selector: 'app-roulette-jedi',
  templateUrl: './roulette-jedi.component.html',
  styleUrls: ['./roulette-jedi.component.css']
})
export class RouletteJediComponent {

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

  clase:string = 'Jedi';

  cartas = [
    {
      id: 1,
      name: 'Luke Skywalker',
      url: './../../../../../../assets/image/luke-skywalker.jpg',
      tipo: `${this.clase}`
    },
    {
      id: 2,
      name: 'Obi-Wan Kenobi',
      url: './../../../../../../assets/image/obi-wan-kenobi.jpeg',
      tipo: `${this.clase}`
    },
    {
      id: 3,
      name: 'Yoda',
      url: './../../../../../../assets/image/Yoda.jpeg',
      tipo: `${this.clase}`
    },
    {
      id: 4,
      name: 'Mace Windu',
      url: './../../../../../../assets/image/mace-windu.png',
      tipo: `${this.clase}`
    },
    {
      id: 5,
      name: 'Qui-Gon Jinn',
      url: './../../../../../../assets/image/qui-gon-jinn.webp',
      tipo: `${this.clase}`
    },
    {
      id: 6,
      name: 'Rey',
      url: './../../../../../../assets/image/rey.webp',
      tipo: `${this.clase}`
    },
    {
      id: 7,
      name: 'Ahsoka Tano',
      url: './../../../../../../assets/image/ahsoka-tano.webp',
      tipo: `${this.clase}`
    },
    {
      id: 8,
      name: 'Anakin Skywalker',
      url: './../../../../../../assets/image/anakin-skywalker.webp',
      tipo: `${this.clase}`
    }
  ]

  premio(premios:string, url: string) {
    Swal.fire({
      icon: 'success',
      title: `Carta ganada: ${premios}. Revisa la sección "Mis cartas".`,
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
