import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastService } from '../../../shared/services/toast.service';

interface Notificacion {
  id: number;
  titulo: string;
  mensaje: string;
  fecha: Date;
  leida: boolean;
  tipo: 'reserva' | 'sistema' | 'oferta';
}

@Component({
  selector: 'app-cliente-notificaciones',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cliente-notificaciones.component.html',
  styleUrls: ['./cliente-notificaciones.component.scss']
})
export class ClienteNotificacionesComponent {
  notificaciones = signal<Notificacion[]>([
    {
      id: 1,
      titulo: 'Reserva confirmada',
      mensaje: 'Tu reserva en Casa Verde Vista ha sido confirmada. ¡Te esperamos!',
      fecha: new Date('2024-01-15T10:30:00'),
      leida: false,
      tipo: 'reserva'
    },
    {
      id: 2,
      titulo: 'Recordatorio de llegada',
      mensaje: 'Tu hospedaje en Cabañas del Bosque inicia mañana. Verifica los detalles.',
      fecha: new Date('2024-01-10T08:00:00'),
      leida: false,
      tipo: 'reserva'
    },
    {
      id: 3,
      titulo: '¡Nueva oferta disponible!',
      mensaje: 'Descuento del 20% en hospedajes para febrero. ¡Aprovecha!',
      fecha: new Date('2024-01-05T14:00:00'),
      leida: true,
      tipo: 'oferta'
    },
    {
      id: 4,
      titulo: 'Actualización del sistema',
      mensaje: 'Hemos mejorado nuestra plataforma para brindarte mejor experiencia.',
      fecha: new Date('2024-01-01T12:00:00'),
      leida: true,
      tipo: 'sistema'
    }
  ]);

  constructor(private toastService: ToastService) {}

  get notificacionesNoLeidas() {
    return this.notificaciones().filter(n => !n.leida);
  }

  get notificacionesLeidas() {
    return this.notificaciones().filter(n => n.leida);
  }

  marcarLeida(notificacion: Notificacion) {
    const updated = this.notificaciones().map(n =>
      n.id === notificacion.id ? { ...n, leida: true } : n
    );
    this.notificaciones.set(updated);
    this.toastService.show('Notificación marcada como leída', 'success');
  }

  marcarNoLeida(notificacion: Notificacion) {
    const updated = this.notificaciones().map(n =>
      n.id === notificacion.id ? { ...n, leida: false } : n
    );
    this.notificaciones.set(updated);
    this.toastService.show('Notificación marcada como no leída', 'info');
  }

  eliminar(notificacion: Notificacion) {
    const updated = this.notificaciones().filter(n => n.id !== notificacion.id);
    this.notificaciones.set(updated);
    this.toastService.show('Notificación eliminada', 'success');
  }
}
