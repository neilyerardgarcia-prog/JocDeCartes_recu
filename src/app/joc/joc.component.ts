import {Component, OnInit} from '@angular/core';
import {Joc} from "../../models/joc";
import {JugadorComponent} from "../jugador/jugador.component";
import {NgForOf, NgIf, NgStyle} from "@angular/common";
import {CompartidoService} from "../compartido.service";

@Component({
  selector: 'app-joc',
  standalone: true,
  imports: [
    JugadorComponent,
    NgStyle,
    NgForOf,
    NgIf
  ],
  templateUrl: './joc.component.html',
  styleUrl: './joc.component.css'
})
export class JocComponent implements OnInit {
  cardValue!: number;
  nombredecarta!: string;
  pickCardAnimation = false;
  currentCard: string | undefined | any = '';
  game: Joc | undefined;

  constructor(public cosa:CompartidoService) {}

  ngOnInit(): void {
    this.newGame();

  }

  newGame() {
    this.game = new Joc();
    console.log(this.game)
  }

  takeCard() {
    if(!this.pickCardAnimation){
      this.currentCard = this.game?.stack.pop();
      this.pickCardAnimation = true;
      this.cardValue = Number(this.currentCard?.split('_')[1]);

      setTimeout(()=> {
        this.game?.playedCards.push(this.currentCard);
        this.pickCardAnimation = false;
      }, 1000);
    }
    console.log(this.currentCard)
    console.log(this.cardValue)
    this.cosa.asignar(this.cardValue)
  }

  mostrarnombre(){
    this.nombredecarta = this.currentCard;
  }
}
