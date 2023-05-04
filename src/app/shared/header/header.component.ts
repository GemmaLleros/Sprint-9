import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router: Router) {
    // Detecta cuando se cambia la ruta
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Actualiza la clase "active" en el enlace de la barra de navegación correspondiente
        const links = document.querySelectorAll('.navbar-nav .nav-link');
        links.forEach((link) => {
          if (link.getAttribute('routerLink') === this.router.url) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }
}
