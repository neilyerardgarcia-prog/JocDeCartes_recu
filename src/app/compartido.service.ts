import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompartidoService {
  public Currentcard: number = 0;
  public turno: number = 0;
  public jug1: number = 0;
  public jug2: number = 0;
  public jug3: number = 0;
  public ronda: number = 0;
  public medidor: number = 0;

  constructor() {
  }

  asignar(cosa: number) {
    this.Currentcard = cosa
    if (this.turno == 0) {
      while (this.medidor < 3){
        this.medidor++
        if (this.Currentcard % 2 !== 0){
          if (this.Currentcard == 14) {
            this.jug1 = this.jug1 * 2
          }else{
            this.jug1 += this.Currentcard;
          }
        }
      }
      this.medidor = 0
      this.turno++
    } else if (this.turno == 1) {
      while (this.medidor < 3){
        this.medidor++
        if (this.Currentcard % 2 !== 0) {
          if (this.Currentcard == 14) {
            this.jug2 = this.jug2 * 2
          } else {
            this.jug2 += this.Currentcard;
          }
        }
      }
      this.medidor = 0
      this.turno++
    } else {
      while (this.medidor < 3){
        this.medidor++
        if (this.Currentcard % 2 !== 0) {
          if (this.Currentcard == 14) {
            this.jug3 = this.jug3 * 2
          } else {
            this.jug3 += this.Currentcard;
          }
        }
      }
      this.medidor = 0
      this.turno = 0
    }
  }
}
