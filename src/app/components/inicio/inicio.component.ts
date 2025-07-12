import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  modalActivo: boolean = false;
  esRegistro: boolean = false;
  estaAutenticado: boolean = false;
  email: string = '';
  password: string = '';
  error: string = '';

  constructor(private router: Router, public auth: Auth) {}

  ngOnInit(): void {
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
      localStorage.setItem('autenticado', 'true');
      this.router.navigate(['/autos']);
    } catch (err: any) {
      this.error = err.message || 'Ocurrió un error';
    }
  }

  cancelarLogin(event: Event): void {
    event.preventDefault();
    this.modalActivo = false;
  }

  cerrarSesion(): void {
    signOut(this.auth).then(() => {
      this.estaAutenticado = false;
      localStorage.removeItem('autenticado');
      this.router.navigate(['/inicio']);
    });
  }
}
