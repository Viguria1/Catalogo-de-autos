import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AutosService } from '../../services/autos.service';
import { Auto } from '../../interfaces/auto';

@Component({
  selector: 'app-nuevos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [AutosService],
  templateUrl: './nuevos.component.html',
  styleUrls: ['./nuevos.component.css']
})
export class NuevosComponent implements OnInit {
  autos: Auto[] = [];
  autosNuevos: Auto[] = [];
  autoSeleccionado?: Auto;
  mostrarTodos = false;
  marcaFiltro = '';

  constructor(private autosService: AutosService) {}

  ngOnInit() {
    this.autosService.obtenerAutos().subscribe((data: Auto[]) => {
      this.autos = data;
      const anioActual = new Date().getFullYear();
      this.autosNuevos = data.filter(auto => auto.lanzamiento === anioActual);
    });
  }

  obtenerNuevosFiltrados(): Auto[] {
    const filtrados = this.autosNuevos.filter(auto =>
      this.marcaFiltro === '' || auto.marca === this.marcaFiltro
    );
    return this.mostrarTodos ? filtrados : filtrados.slice(0, 4);
  }

  obtenerMarcas(): string[] {
    return [...new Set(this.autosNuevos.map(auto => auto.marca))];
  }

  abrirDetalle(auto: Auto) {
    this.autoSeleccionado = auto;
  }

  cerrarDetalle() {
    this.autoSeleccionado = undefined;
  }
}