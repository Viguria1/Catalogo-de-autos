import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutosService } from '../../services/autos.service';
import { Auto } from '../../interfaces/auto';

@Component({
  selector: 'app-autos',
  standalone: true,
  imports: [CommonModule],
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
  }
}
