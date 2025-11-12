import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FavoritesService, FavoriteAlojamiento } from '../../../shared/services/favorites.service';
import { ToastService } from '../../../shared/services/toast.service';

interface Alojamiento {
  id: number;
  nombre: string;
  ubicacion: string;
  precioNoche: number;
  rating: number;
  imagen: string;
}

@Component({
  selector: 'app-lista-alojamientos',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './lista-alojamientos.component.html',
  styleUrl: './lista-alojamientos.component.scss'
})
export class ListaAlojamientosComponent {
  search = '';
  sortMode: 'precio' | 'rating' | 'nombre' = 'precio';

  alojamientos: Alojamiento[] = [
    {
      id: 1,
      nombre: 'Cabaña Sierra Verde',
      ubicacion: 'Arroyo Seco, Qro.',
      precioNoche: 950,
      rating: 4.7,
      imagen: 'https://images.unsplash.com/photo-1505691723518-36a5ac3b2d87?auto=format&fit=crop&w=900&q=60'
    },
    {
      id: 2,
      nombre: 'Posada La Cascada',
      ubicacion: 'San Juan de los Durán',
      precioNoche: 780,
      rating: 4.4,
      imagen: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=900&q=60'
    },
    {
      id: 3,
      nombre: 'Casa del Río',
      ubicacion: 'Concá',
      precioNoche: 1200,
      rating: 4.9,
      imagen: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=900&q=60'
    }
  ];

  constructor(private favs: FavoritesService, private toast: ToastService) {}

  get filtered(): Alojamiento[] {
    let result = this.alojamientos.filter(a =>
      a.nombre.toLowerCase().includes(this.search.toLowerCase()) ||
      a.ubicacion.toLowerCase().includes(this.search.toLowerCase())
    );
    switch (this.sortMode) {
      case 'precio':
        result = [...result].sort((a, b) => a.precioNoche - b.precioNoche);
        break;
      case 'rating':
        result = [...result].sort((a, b) => b.rating - a.rating);
        break;
      case 'nombre':
        result = [...result].sort((a, b) => a.nombre.localeCompare(b.nombre));
        break;
    }
    return result;
  }

  isFavorite(id: number): boolean {
    return this.favs.isFavorite(id);
  }

  toggleFavorite(a: Alojamiento, ev: Event) {
    ev.preventDefault();
    ev.stopPropagation();
    const wasFav = this.isFavorite(a.id);
    this.favs.toggle(a as FavoriteAlojamiento);
    this.toast.info(!wasFav ? 'Añadido a favoritos' : 'Eliminado de favoritos');
  }
}
