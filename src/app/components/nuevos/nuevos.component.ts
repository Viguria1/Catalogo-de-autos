import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutosService } from '../../services/autos.service';
import { Auto } from '../../interfaces/auto';

@Component({
  selector: 'app-nuevos',
  standalone: true,
  imports: [CommonModule],
  providers: [AutosService],
  templateUrl: './nuevos.component.html',
})
export class NuevosComponent implements OnInit {
  nuevos: Auto[] = [];

  constructor(private autosService: AutosService) {}

  ngOnInit() {
    const anio = new Date().getFullYear();
    this.autosService.obtenerAutos().subscribe((data: Auto[]) => {
      this.nuevos = data.filter((a: Auto) => a.lanzamiento === anio);
    });
  }
}
