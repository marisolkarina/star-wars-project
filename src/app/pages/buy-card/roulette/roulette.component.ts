import { Component, ElementRef, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
import { AddCardService } from './services/add-card.service';
import Card from './interfaces/cards-interface';

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

  constructor(private addCardService: AddCardService) {
  }

  girar() {
    if (this.giros < this.vueltas) {
      let rand = Math.random()*7200;
      this.calcular(rand);
      this.giros++;
      this.audio.nativeElement.play();
    }
  }

  cartas = [
    {
      id: 1,
      name: 'Yoda',
      url: '../../../assets/image/Yoda.jpeg'
    },
    {
      id: 2,
      name: 'Darth Vader',
      url: '../../../assets/image/darth-vader.jpg'
    },
    {
      id: 3,
      name: 'Obi Wan Kenobi', 
      url: '../../../assets/image/obi-wan-kenobi.jpeg'
    },
    {
      id: 4,
      name: 'Chewbacca',
      url: '../../../assets/image/chewbacca.jpg'
    },
    {
      id: 5,
      name: 'Emperador',
      url: '../../../assets/image/emperador.jpg'
    },
    {
      id: 6,
      name: 'Leia Organa', 
      url: '../../../assets/image/leia-organa.jfif'
    },
    {
      id: 7,
      name: 'Luke Skywalker',
      url: '../../../assets/image/luke-skywalker.jfif'
    },
    {
      id: 8,
      name: 'Anakin Skywalker',
      url: '../../../assets/image/anakin-skywalker.jfif'
    }
  ]

  premio(premios:string, url: string) {
    // console.log(premios);
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
          this.premio('Yoda', '../../../../assets/image/Yoda.jpeg');
          this.addCardService.addCard(this.cartas[0]); 
          break;
        case this.valor > 45 && this.valor <= 90: 
          this.premio('Darth Vader', '../../../../assets/image/darth-vader.jpg');
          this.addCardService.addCard(this.cartas[1]); 
          break;
        case this.valor > 90 && this.valor <= 135: 
          this.premio('Obi Wan Kenobi', '../../../../assets/image/obi-wan-kenobi.jpeg');
          this.addCardService.addCard(this.cartas[2]);
          break;
        case this.valor > 135 && this.valor <= 180: 
          this.premio('Chewbacca', '../../../../assets/image/chewbacca.jpg');
          this.addCardService.addCard(this.cartas[3]);
          break;
        case this.valor > 180 && this.valor <= 225: 
          this.premio('Emperador', '../../../../assets/image/emperador.jpg');
          this.addCardService.addCard(this.cartas[4]);
          break;
        case this.valor > 225 && this.valor <= 270: 
          this.premio('Leia Organa', '../../../../assets/image/leia-organa.jfif');
          this.addCardService.addCard(this.cartas[5]);
          break;
        case this.valor > 270 && this.valor <= 315: 
          this.premio('Luke Skywalker', '../../../../assets/image/luke-skywalker.jfif');
          this.addCardService.addCard(this.cartas[6]);
          break;
        case this.valor > 315 && this.valor <= 360: 
          this.premio('Anakin Skywalker', '../../../../assets/image/anakin-skywalker.jfif');
          this.addCardService.addCard(this.cartas[7]);
          break;
      }
    }, 6000)

  }
}
