import { Component } from '@angular/core';
<<<<<<< HEAD

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
=======
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inicio.component.html',
>>>>>>> cd5dae4892977b3b4e579ff5ae28d53469f49f27
})
export class InicioComponent {}
