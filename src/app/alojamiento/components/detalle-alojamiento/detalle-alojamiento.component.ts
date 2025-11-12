import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { ToastService } from '../../../shared/services/toast.service';

@Component({
  selector: 'app-detalle-alojamiento',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './detalle-alojamiento.component.html',
  styleUrl: './detalle-alojamiento.component.scss'
})
export class DetalleAlojamientoComponent {
  gallery = [
    'https://images.unsplash.com/photo-1505691723518-36a5ac3b2d87?auto=format&fit=crop&w=900&q=60',
    'https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=900&q=60',
    'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=900&q=60'
  ];
  booking = { entrada: '', salida: '', huespedes: 1 };

  constructor(private toast: ToastService) {}

  reservar(form: NgForm) {
    if (form.invalid) return;
    this.toast.success('¡Reserva realizada con éxito!');
    form.resetForm({ huespedes: 1 });
  }
}
