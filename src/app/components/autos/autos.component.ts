import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AutosService } from '../../services/autos.service';
import { Auto } from '../../interfaces/auto';
import { AlertService } from '../../services/alert.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-autos',
  standalone: true,
  imports: [CommonModule, FormsModule, MatSnackBarModule],
  providers: [AutosService],
  templateUrl: './autos.component.html',
  styleUrls: ['./autos.component.css']
})
export class AutosComponent implements OnInit {
  autos: Auto[] = [];
  marcas: string[] = [];
  autoSeleccionado?: Auto;
  terminoBusqueda: string = '';
  modoAdmin: boolean = false;
  criterioOrden: string = 'modelo';

  // Paginación por marca
  paginaPorMarca: { [marca: string]: number } = {};
  autosPorPagina: number = 8;

  autoEnEdicion?: Auto;
  edicionActiva: boolean = false;

  constructor(private autosService: AutosService, private alertService: AlertService) {}

  ngOnInit() {
    this.autosService.obtenerAutos().subscribe((data: Auto[]) => {
      this.autos = data.filter(auto => auto.marca && auto.modelo && auto.imagen);
      this.marcas = [...new Set(this.autos.map(auto => auto.marca))];
      this.marcas.forEach(marca => this.paginaPorMarca[marca] = 1);
      this.ordenarAutos();
    });
  }

  getAutosFiltradosPorMarca(marca: string): Auto[] {
    const termino = this.terminoBusqueda.trim().toLowerCase();
    const autosMarca = this.autos.filter(auto =>
      auto.marca === marca &&
      (termino === '' || (auto.modelo + ' ' + auto.marca).toLowerCase().includes(termino))
    );

    const paginaActual = this.paginaPorMarca[marca] || 1;
    const inicio = (paginaActual - 1) * this.autosPorPagina;
    const fin = inicio + this.autosPorPagina;

    return this.ordenarLista(autosMarca).slice(inicio, fin);
  }

  getTotalPaginas(marca: string): number {
    const total = this.autos.filter(auto =>
      auto.marca === marca &&
      (this.terminoBusqueda.trim() === '' ||
        (auto.modelo + ' ' + auto.marca).toLowerCase().includes(this.terminoBusqueda.trim().toLowerCase()))
    ).length;

    return Math.ceil(total / this.autosPorPagina);
  }

  cambiarPagina(marca: string, nuevaPagina: number) {
    const totalPaginas = this.getTotalPaginas(marca);
    if (nuevaPagina >= 1 && nuevaPagina <= totalPaginas) {
      this.paginaPorMarca[marca] = nuevaPagina;
    }
  }

  hayAutosFiltrados(marca: string): boolean {
    const termino = this.terminoBusqueda.trim().toLowerCase();
    return this.autos.some(auto =>
      auto.marca === marca &&
      (termino === '' || (auto.modelo + ' ' + auto.marca).toLowerCase().includes(termino))
    );
  }

  scrollTo(marca: string) {
    const el = document.getElementById(marca);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  abrirDetalle(auto: Auto) {
    this.autoSeleccionado = auto;
    this.edicionActiva = false;
  }

  cerrarDetalle() {
    this.autoSeleccionado = undefined;
    this.edicionActiva = false;
    this.autoEnEdicion = undefined;
  }

  activarEdicion(auto: Auto) {
    this.autoEnEdicion = { ...auto };
    this.edicionActiva = true;
  }

  guardarEdicion() {
    if (this.autoEnEdicion?.id) {
      this.autosService.editarAuto(this.autoEnEdicion.id, this.autoEnEdicion)
        .then(() => {
          this.edicionActiva = false;
          this.autoEnEdicion = undefined;
          this.autoSeleccionado = undefined;
          this.alertService.success('Auto actualizado correctamente');
        })
        .catch(() => {
          this.alertService.error('Error al actualizar el auto');
        });
    }
  }

  eliminarAuto(id: string) {
    if (confirm('¿Estás seguro de que deseas eliminar este auto?')) {
      this.autosService.eliminarAuto(id).then(() => {
        this.autos = this.autos.filter(a => a.id !== id);
        this.alertService.success('Auto eliminado con éxito');
      }).catch(() => {
        this.alertService.error('Error al eliminar el auto');
      });
    }
  }

  verificarPassword() {
    if (this.modoAdmin) {
      this.modoAdmin = false;
    } else {
      const clave = prompt('Ingrese la contraseña para modo administrador');
      if (clave === '1234') {
        this.modoAdmin = true;
        this.alertService.success('Modo administrador activado');
      } else {
        this.alertService.error('Contraseña incorrecta');
      }
    }
  }

  ordenarAutos() {
    this.autos = this.ordenarLista(this.autos);
  }

  ordenarLista(lista: Auto[]): Auto[] {
    if (this.criterioOrden === 'precio') {
      return lista.sort((a, b) => a.precio - b.precio);
    } else if (this.criterioOrden === 'lanzamiento') {
      return lista.sort((a, b) => b.lanzamiento - a.lanzamiento);
    } else {
      return lista.sort((a, b) => a.modelo.localeCompare(b.modelo));
    }
  }

  obtenerLogoMarca(marca: string): string {
    const logos: any = {
      Toyota: 'https://www.car-brand-names.com/wp-content/uploads/2015/07/Toyota-emblem-3.jpg',
      Kia: 'https://tse1.mm.bing.net/th/id/OIP.PWhbke2Dt8EcogJ3QrgvzAHaD0',
      Hyundai: 'https://1000marcas.net/wp-content/uploads/2020/01/Hyundai-Logo.png',
      Nissan: 'https://th.bing.com/th/id/R.cc90d6c8a85bf3957b9cbe62898f6a81?rik=ofxAYtHSR4KL4g&pid=ImgRaw&r=0',
      Chevrolet: 'https://pluspng.com/img-png/chevrolet-logo-png-logo-chevrolet-clipart-car-yellow-text-transparent-clip-art-900x460.jpg',
      Suzuki: 'https://tse3.mm.bing.net/th/id/OIP.vk_LPD1Em7KWYgC2GSVQrwHaEK',
      Volkswagen: 'https://tse4.mm.bing.net/th/id/OIP.ppPrtxouO-aaxQIoe5xFzwHaEK',
      Mitsubishi: 'https://1000marcas.net/wp-content/uploads/2020/01/Mitsubishi-Logo.png',
    };
    return logos[marca] || 'https://dummyimage.com/60x60/000/fff.png&text=' + marca.charAt(0);
  }
}
