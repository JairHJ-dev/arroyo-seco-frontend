import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ToastService } from '../../../shared/services/toast.service';

@Component({
  selector: 'app-cliente-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './cliente-login.component.html',
  styleUrls: ['./cliente-login.component.scss']
})
export class ClienteLoginComponent {
  model = { email: '', password: '' };
  loading = false;

  constructor(private toast: ToastService, private router: Router) {}

  submit(form: NgForm) {
    if (form.invalid || this.loading) return;
    this.loading = true;
    setTimeout(() => {
      this.toast.show('Inicio de sesión exitoso', 'success');
      this.loading = false;
      this.router.navigate(['/cliente/alojamientos']);
    }, 700);
  }
}
