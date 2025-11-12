import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ToastService } from '../../../shared/services/toast.service';

interface SolicitudModel {
  nombre: string;
  telefono: string;
  contexto: string;
}

@Component({
  selector: 'app-oferente-solicitud',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './oferente-solicitud.component.html',
  styleUrls: ['./oferente-solicitud.component.scss']
})
export class OferenteSolicitudComponent {
  model: SolicitudModel = {
    nombre: '',
    telefono: '',
    contexto: ''
  };

  isSubmitting = false;

  constructor(private toast: ToastService) {}

  submit(form: NgForm) {
    if (form.invalid || this.isSubmitting) return;
    this.isSubmitting = true;

    // Simulate async submission
    setTimeout(() => {
      this.toast.success('Solicitud enviada. Te contactaremos pronto.');
      form.resetForm();
      this.isSubmitting = false;
    }, 800);
  }
}
