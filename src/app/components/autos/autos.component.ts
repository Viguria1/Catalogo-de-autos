import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AutosService } from '../../services/autos.service';
import { Auto } from '../../interfaces/auto';

@Component({
  selector: 'app-autos',
  standalone: true,
  imports: [CommonModule, FormsModule],
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

  autoEnEdicion?: Auto;
  edicionActiva: boolean = false;

  constructor(private autosService: AutosService) {}

  ngOnInit() {
    this.autosService.obtenerAutos().subscribe((data: Auto[]) => {
      this.autos = data.filter(auto => auto.marca && auto.modelo && auto.imagen);
      this.marcas = [...new Set(this.autos.map(auto => auto.marca))];
    });
  }

  getAutosFiltradosPorMarca(marca: string): Auto[] {
    const termino = this.terminoBusqueda.trim().toLowerCase();
    return this.autos.filter(auto =>
      auto.marca === marca &&
      (termino === '' ||
        (auto.modelo + ' ' + auto.marca).toLowerCase().includes(termino))
    );
  }

  hayAutosFiltrados(marca: string): boolean {
    return this.getAutosFiltradosPorMarca(marca).length > 0;
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
          alert('Auto actualizado correctamente');
        })
        .catch((err: any) => {
          console.error('Error al actualizar:', err);
        });
    }
  }

  eliminarAuto(id: string) {
    if (confirm('¿Estás seguro de que deseas eliminar este auto?')) {
      this.autosService.eliminarAuto(id).then(() => {
        this.autos = this.autos.filter(a => a.id !== id);
        console.log('Auto eliminado con éxito');
      }).catch((err: any) => {
        console.error('Error al eliminar:', err);
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
      } else {
        alert('Contraseña incorrecta');
      }
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
