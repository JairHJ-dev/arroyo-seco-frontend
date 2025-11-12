import { Injectable } from '@angular/core';

export interface RegistroOferentePayload {
  nombre: string;
  telefono: string;
  contexto: string;
}

@Injectable({ providedIn: 'root' })
export class RegistroOferenteService {
  // Placeholder for future HTTP integration
  submitSolicitud(payload: RegistroOferentePayload) {
    // In future: return this.http.post('/api/oferentes/solicitudes', payload)
    console.debug('[RegistroOferenteService] Solicitud mock enviada', payload);
    return Promise.resolve({ ok: true });
  }
}
