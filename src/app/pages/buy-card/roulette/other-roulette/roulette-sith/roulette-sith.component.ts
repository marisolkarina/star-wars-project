import { Component, ElementRef, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
import { AddCardService } from '../../services/add-card.service';

@Component({
  selector: 'app-roulette-sith',
  templateUrl: './roulette-sith.component.html',
  styleUrls: ['./roulette-sith.component.css']
})
export class RouletteSithComponent {
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

  clase:string = 'Sith';

  cartas = [
    {
      id: 1,
      name: 'Darth Vader',
      url: './../../../../../../ssets/image/darth-vader.png',
      tipo: `${this.clase}`
    },
    {
      id: 2,
      name: 'Darth Sidious',
      url: './../../../../../../ssets/image/darth-sidious.jpg',
      tipo: `${this.clase}`
    },
    {
      id: 3,
      name: 'Darth Maul',
      url: './../../../../../../assets/image/darth-maul.webp',
      tipo: `${this.clase}`
    },
    {
      id: 4,
      name: 'Darth Tyramus',
      url: './../../../../../../assets/image/darth-tyramus.webp',
      tipo: `${this.clase}`
    },
    {
      id: 5,
      name: 'Darth Plagueis',
      url: './../../../../../../assets/image/darth-plagueis.webp',
      tipo: `${this.clase}`
    },
    {
      id: 6,
      name: 'Darth Revan',
      url: './../../../../../../assets/image/darth-revan.webp',
      tipo: `${this.clase}`
    },
    {
      id: 7,
      name: 'Darth Bane',
      url: './../../../../../../assets/image/darth-bane.webp',
      tipo: `${this.clase}`
    },
    {
      id: 8,
      name: 'Kylo Ren',
      url: './../../../../../../assets/image/kylo-ren.png',
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
