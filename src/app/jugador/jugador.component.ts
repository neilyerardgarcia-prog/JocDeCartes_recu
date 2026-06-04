import {Component, Input, OnInit} from '@angular/core';
import {CompartidoService} from "../compartido.service";

@Component({
  selector: 'app-jugador',
  standalone: true,
  imports: [],
  templateUrl: './jugador.component.html',
  styleUrl: './jugador.component.css'
})
export class JugadorComponent implements OnInit{

  @Input() name: any;
  @Input() posicio: any;
  private intervaloId: any;
  constructor(public cosa:CompartidoService)  {}
  divContent: string = 'Texto inicial';
  divColorneil: string = 'orange';
  yous: string = 'orange';
  luis: string = 'orange';
  ngOnInit() {
    this.refrescar2()
    this.intervaloId = setInterval(() => {
      this.refrescar2();
    }, 10);
  }
  refrescar2(){
    if (this.cosa.turno == 0){
      this.divColorneil = 'red';
      this.luis = 'orange';
      this.yous = 'orange';
    } else if (this.cosa.turno == 1){
      this.divColorneil = 'orange';
      this.luis = 'red';
      this.yous = 'orange';
    } else {
      this.divColorneil = 'orange';
      this.luis = 'orange';
      this.yous = 'red';
    }
  }
}
