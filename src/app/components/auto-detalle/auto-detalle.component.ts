import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { AutosService } from '../../services/autos.service';
import { Auto } from '../../interfaces/auto';

@Component({
  selector: 'app-auto-detalle',
  standalone: true,
  imports: [CommonModule],
  providers: [AutosService],
  templateUrl: './auto-detalle.component.html',
})
export class AutoDetalleComponent implements OnInit {
  auto?: Auto;

  constructor(
    private route: ActivatedRoute,
    private autosService: AutosService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.autosService.obtenerAutoPorId(id).subscribe((data) => {
        if (data) {
          this.auto = data;
        } else {
          console.error('Auto no encontrado');
        }
      });
    }
  }
}
