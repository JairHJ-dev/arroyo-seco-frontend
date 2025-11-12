import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FavoritesService } from '../../../shared/services/favorites.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-cliente-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cliente-navbar.component.html',
  styleUrls: ['./cliente-navbar.component.scss']
})
export class ClienteNavbarComponent {
  count = 0;
  private sub?: any;

  constructor(private favs: FavoritesService) {
    this.sub = this.favs.favorites$.subscribe(list => this.count = list.length);
  }
}
