<<<<<<< HEAD
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
=======
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutosService } from '../../services/autos.service';
import { Auto } from '../../interfaces/auto';
>>>>>>> cd5dae4892977b3b4e579ff5ae28d53469f49f27

@Component({
  selector: 'app-autos',
  standalone: true,
  imports: [CommonModule],
<<<<<<< HEAD
  templateUrl: './autos.component.html',
  styleUrls: ['./autos.component.css']
})
export class AutosComponent {
  autos = [
    { marca: 'Toyota', modelo: 'Corolla', tipo: 'Sedan', año: 2022, imagen: 'https://via.placeholder.com/150?text=Toyota+Corolla' },
    { marca: 'Toyota', modelo: 'Yaris', tipo: 'Hatchback', año: 2021, imagen: 'https://via.placeholder.com/150?text=Toyota+Yaris' },
    { marca: 'Toyota', modelo: 'RAV4', tipo: 'SUV', año: 2023, imagen: 'https://via.placeholder.com/150?text=Toyota+RAV4' },

    { marca: 'Honda', modelo: 'Civic', tipo: 'Sedan', año: 2022, imagen: 'https://via.placeholder.com/150?text=Honda+Civic' },
    { marca: 'Honda', modelo: 'Fit', tipo: 'Hatchback', año: 2021, imagen: 'https://via.placeholder.com/150?text=Honda+Fit' },
    { marca: 'Honda', modelo: 'CR-V', tipo: 'SUV', año: 2023, imagen: 'https://via.placeholder.com/150?text=Honda+CR-V' },

    { marca: 'Nissan', modelo: 'Sentra', tipo: 'Sedan', año: 2022, imagen: 'https://via.placeholder.com/150?text=Nissan+Sentra' },
    { marca: 'Chevrolet', modelo: 'Cruze', tipo: 'Sedan', año: 2021, imagen: 'https://via.placeholder.com/150?text=Chevrolet+Cruze' },
    { marca: 'Ford', modelo: 'Focus', tipo: 'Hatchback', año: 2020, imagen: 'https://via.placeholder.com/150?text=Ford+Focus' }
  ];

  marcaSeleccionada: string = '';
  seccion: 'tipo' | 'año' | 'modelo' | null = null;

  get marcas(): string[] {
    return Array.from(new Set(this.autos.map(auto => auto.marca)));
  }

  seleccionarMarca(marca: string) {
    this.marcaSeleccionada = marca;
    this.seccion = null;
  }

  mostrarSeccion(seccion: 'tipo' | 'año' | 'modelo') {
    this.seccion = seccion;
  }

  datosFiltrados(): string[] {
    if (!this.marcaSeleccionada || !this.seccion) return [];
    const autosMarca = this.autos.filter(auto => auto.marca === this.marcaSeleccionada);
    const valores = autosMarca.map(auto => auto[this.seccion!]);
    return Array.from(new Set(valores.map(v => String(v))));
=======
  providers: [AutosService],
  templateUrl: './autos.component.html',
})
export class AutosComponent implements OnInit {
  autos: Auto[] = [];

  constructor(private autosService: AutosService) {}

  ngOnInit() {
    this.autosService.obtenerAutos().subscribe((data: Auto[]) => {
      this.autos = data;
    });
>>>>>>> cd5dae4892977b3b4e579ff5ae28d53469f49f27
  }
}
