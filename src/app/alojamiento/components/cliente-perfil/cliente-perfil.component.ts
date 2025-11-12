import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastService } from '../../../shared/services/toast.service';

interface Perfil {
  nombre: string;
  email: string;
  telefono: string;
  direccion: string;
  ciudad: string;
}

@Component({
  selector: 'app-cliente-perfil',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cliente-perfil.component.html',
  styleUrls: ['./cliente-perfil.component.scss']
})
export class ClientePerfilComponent {
  perfil = signal<Perfil>({
    nombre: 'Juan Pérez',
    email: 'juan.perez@correo.com',
    telefono: '461-123-4567',
    direccion: 'Calle Principal 123',
    ciudad: 'Arroyo Seco'
  });

  constructor(private toastService: ToastService) {}

  guardarPerfil() {
    // Aquí se integraría con el servicio de API
    this.toastService.show('Perfil actualizado exitosamente', 'success');
  }
}
