import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  modalActivo: boolean = false;
  esRegistro: boolean = false;
  estaAutenticado: boolean = false;
  email: string = '';
  password: string = '';
  error: string = '';

  constructor(public auth: Auth, private router: Router) {
    // Verifica si hay un usuario autenticado al iniciar
    onAuthStateChanged(this.auth, (user) => {
      this.estaAutenticado = !!user;
    });
  }

  mostrarLogin(): void {
    this.modalActivo = true;
    this.esRegistro = false;
    this.error = '';
  }

  mostrarRegistro(): void {
    this.modalActivo = true;
    this.esRegistro = true;
    this.error = '';
  }

  async cerrarLogin(event: Event): Promise<void> {
    event.preventDefault();
    this.error = '';

    try {
      if (this.esRegistro) {
        await createUserWithEmailAndPassword(this.auth, this.email, this.password);
      } else {
        await signInWithEmailAndPassword(this.auth, this.email, this.password);
      }

      this.modalActivo = false;
      this.estaAutenticado = true;
      this.email = '';
      this.password = '';
    } catch (err: any) {
      this.error = err.message || 'Ocurrió un error al iniciar sesión';
    }
  }

  cancelarLogin(event: Event): void {
    event.preventDefault();
    this.modalActivo = false;
    this.email = '';
    this.password = '';
    this.error = '';
  }

  cerrarSesion(): void {
    signOut(this.auth).then(() => {
      this.estaAutenticado = false;
      this.router.navigate(['/']); // Redirige al inicio al cerrar sesión
    });
  }
}
