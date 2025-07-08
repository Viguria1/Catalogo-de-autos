import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  modalActivo: boolean = false;
  esRegistro: boolean = false;

  mostrarLogin() {
    this.modalActivo = true;
    this.esRegistro = false;
  }

  mostrarRegistro() {
    this.modalActivo = true;
    this.esRegistro = true;
  }

  cerrarLogin(event: Event) {
    event.preventDefault(); // para evitar que recargue la página
    this.modalActivo = false;
  }
}
