import { Component, HostListener, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentUrl = '';
  isNavbarScrolled = false;
  isNavbarCollapsed = true;
  isTransparent = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Set current URL on page load
    this.currentUrl = this.router.url;

    // Subscribe to router events to update current URL
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateCurrentUrl();
      }
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Update class based on scroll position
    const offset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (offset > 0) {
      this.isNavbarScrolled = true;
    } else {
      this.isNavbarScrolled = false;
    }
  }

  // Update current URL on route change
  updateCurrentUrl() {
    this.currentUrl = this.router.url;
  }

  // Scroll to top of page
  scrollToTop() {
    window.scrollTo(0, 0);
  }

  isSmallScreen!: boolean;

  @HostListener('window:resize', ['$event'])
  onResize(event: { target: { innerWidth: number; }; }) {
    this.isSmallScreen = event.target.innerWidth < 992; //  tamaño deseado de la pantalla pequeña
  }

  // Function to check if current URL matches the provided path
  isActive(path: string) {
    return this.currentUrl === path;
  }

}

