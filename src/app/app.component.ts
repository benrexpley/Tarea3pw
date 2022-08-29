import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public nombre: string = 'Julio';
  public contador: number = 0;
  public scroll: number = 0;
  public alto: number = 300;
  public ancho: number = 300;
  public mostrar: boolean = false;
  public color: string = "";
  public title: string = "";
  public imagen: string = 'http://pm1.narvii.com/8212/85321d90dc156f71b5ee475b3fb4be845827198br1-540-541v2_uhq.jpg';
  public sumar(n1: number, n2: number): number {
    return n1 + n2;
  }
  public eventoBoton(event: Event): void {
    console.log(event);
    alert('Hola');
  }
  public aumentarContador(): void {
    this.contador = this.contador + 1;
  }
  public scrollEn(event: Event): void {
    this.scroll = (event.target as Element).scrollTop;
  }
  public capturarAlto(event: Event): void {
    const valor = Number.parseInt((event.target as HTMLInputElement).value)
    this.alto = valor;
  }
  public capturarAncho(event: Event): void {
    const escrito = (event.target as HTMLInputElement).value;
    this.ancho = Number.parseInt(escrito);
  }
  public capturarColor(event: Event): void {
    const color = (event.target as HTMLInputElement).value;
    this.color = color;
  }
}
