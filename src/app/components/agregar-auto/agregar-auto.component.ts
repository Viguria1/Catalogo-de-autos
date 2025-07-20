import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AutosService } from '../../services/autos.service';
import { Auto } from '../../interfaces/auto';

@Component({
  selector: 'app-agregar-auto',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './agregar-auto.component.html',
  styleUrls: ['./agregar-auto.component.css'],
  providers: [AutosService]
})
export class AgregarAutoComponent {
  fb = inject(FormBuilder);
  autosService = inject(AutosService);

  autoForm: FormGroup = this.fb.group({
    modelo: ['', [Validators.required, Validators.minLength(3), this.modeloValidator]],
    marca: ['', Validators.required],
    tipo: ['', Validators.required],
    lanzamiento: [2024, [Validators.required, Validators.min(2000), Validators.max(new Date().getFullYear())]],
    precio: [0, [Validators.required, Validators.min(5000), Validators.max(200000)]],
    imagen: ['', [
  Validators.required,
  Validators.pattern(/^https?:\/\/.+\.(jpg|jpeg|png|webp)(\?.*)?$/i)
]]

  });

  mensaje: string = '';
  error: string = '';

  agregarAuto() {
    if (this.autoForm.invalid) {
      this.autoForm.markAllAsTouched();
      return;
    }

    const nuevoAuto: Auto = this.autoForm.value;
    this.autosService.agregarAuto(nuevoAuto).then(() => {
      this.mensaje = '✅ Auto agregado correctamente';
      this.autoForm.reset();
    }).catch((err: any) => {
      console.error(err);
      this.error = '❌ Error al agregar el auto';
    });
  }

  // 🚫 Evita modelos tipo "asdfg", "tu vieja", etc.
  modeloValidator(control: AbstractControl): ValidationErrors | null {
    const valor = control.value?.toLowerCase();
    const prohibidas = ['asdf', '1234', 'tu vieja', 'ninguno', 'carro'];
    return prohibidas.some(p => valor?.includes(p)) ? { modeloProhibido: true } : null;
  }
}
