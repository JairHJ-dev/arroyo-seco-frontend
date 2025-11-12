import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastService } from '../../../shared/services/toast.service';

interface Reserva {
  id: number;
  alojamiento: string;
  fechaEntrada: string;
  fechaSalida: string;
  huespedes: number;
  total: number;
  estado: 'activa' | 'pasada' | 'cancelada';
}

@Component({
  selector: 'app-cliente-reservas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cliente-reservas.component.html',
  styleUrls: ['./cliente-reservas.component.scss']
})
export class ClienteReservasComponent {
  reservas: Reserva[] = [
    {
      id: 1,
      alojamiento: 'Cabaña Sierra Verde',
      fechaEntrada: '2025-12-15',
      fechaSalida: '2025-12-18',
      huespedes: 2,
      total: 2850,
      estado: 'activa'
    },
    {
      id: 2,
      alojamiento: 'Posada La Cascada',
      fechaEntrada: '2025-11-01',
      fechaSalida: '2025-11-03',
      huespedes: 3,
      total: 1560,
      estado: 'pasada'
    },
    {
      id: 3,
      alojamiento: 'Casa del Río',
      fechaEntrada: '2026-01-10',
      fechaSalida: '2026-01-14',
      huespedes: 4,
      total: 4800,
      estado: 'activa'
    }
  ];

  selectedReserva: Reserva | null = null;
  showCancelModal = false;

  constructor(private toast: ToastService) {}

  openCancelModal(reserva: Reserva) {
    this.selectedReserva = reserva;
    this.showCancelModal = true;
  }

  closeCancelModal() {
    this.showCancelModal = false;
    this.selectedReserva = null;
  }

  cancelReserva() {
    if (this.selectedReserva) {
      this.selectedReserva.estado = 'cancelada';
      this.toast.success('Reserva cancelada exitosamente');
      this.closeCancelModal();
    }
  }

  get reservasActivas() {
    return this.reservas.filter(r => r.estado === 'activa');
  }

  get reservasPasadas() {
    return this.reservas.filter(r => r.estado === 'pasada' || r.estado === 'cancelada');
  }
}
