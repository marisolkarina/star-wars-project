import { Component, ElementRef, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
import { AddCardService } from '../../services/add-card.service';

@Component({
  selector: 'app-roulette-rebelde',
  templateUrl: './roulette-rebelde.component.html',
  styleUrls: ['./roulette-rebelde.component.css']
})
export class RouletteRebeldeComponent {
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

  clase:string = 'Rebelde';

  cartas = [
    {
      id: 1,
      name: 'Princesa Leia Organa',
      url: './../../../../../../assets/image/leia-organa.jpg',
      tipo: `${this.clase}`
    },
    {
      id: 2,
      name: 'Han Solo',
      url: './../../../../../../assets/image/han-solo.webp',
      tipo: `${this.clase}`
    },
    {
      id: 3,
      name: 'Saw Gerrera',
      url: './../../../../../../assets/image/saw-gerrera.webp',
      tipo: `${this.clase}`
    },
    {
      id: 4,
      name: 'Chewbacca',
      url: './../../../../../../assets/image/chewbacca.webp',
      tipo: `${this.clase}`
    },
    {
      id: 5,
      name: 'Lando Calrissian',
      url: './../../../../../../assets/image/lando-calrissian.webp',
      tipo: `${this.clase}`
    },
    {
      id: 6,
      name: 'Cassian Andor',
      url: './../../../../../../assets/image/cassian-andor.webp',
      tipo: `${this.clase}`
    },
    {
      id: 7,
      name: 'Jyn Erso',
      url: './../../../../../../assets/image/jyn-erso.webp',
      tipo: `${this.clase}`
    },
    {
      id: 8,
      name: 'Hera Syndulla',
      url: './../../../../../../assets/image/hera-syndulla.webp',
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
