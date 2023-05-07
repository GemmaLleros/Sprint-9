import { Component } from '@angular/core';
import { Image } from '../interfaces/image';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  providers: [NgbCarouselConfig] // agregar NgbCarouselConfig a la lista de proveedores
})
export class GalleryComponent {
  images: Image[] = [
    {
      src: '../../../assets/img.prueba/bedroom3.jpg',
      alt: 'Foto 0'
    },
    {
      src: '../../../assets/img.prueba/bedroom3.jpg',
      alt: 'Foto 1'
    },
    {
      src: '../../../assets/img.prueba/bedroom3.jpg',
      alt: 'Foto 2'
    },
    {
      src: '../../../assets/img.prueba/bedroom3.jpg',
      alt: 'Foto 3'
    },
    {
      src: '../../../assets/img.prueba/bedroom3.jpg',
      alt: 'Foto 4'
    },
    {
      src: '../../../assets/img.prueba/bedroom3.jpg',
      alt: 'Foto 5'
    },
    {
      src: '../../../assets/img.prueba/bedroom3.jpg',
      alt: 'Foto 6'
    },
    {
      src: '../../../assets/img.prueba/bedroom3.jpg',
      alt: 'Foto 7'
    },
    {
      src: '../../../assets/img.prueba/bedroom3.jpg',
      alt: 'Foto 8'
    }
  ];

  selectedImageIndex: string | undefined;
  showCarousel: boolean = false;
  showGallery: boolean = true;

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 5000; // tiempo en milisegundos para cambiar de slide
    config.wrap = true; // vuelve a comenzar desde el principio cuando se llega al último slide
    config.keyboard = true; // habilita la navegación mediante teclado (flechas)
    config.pauseOnHover = false; // pausa la reproducción en caso de hover
    config.showNavigationIndicators = true;
  }

  openCarousel(index: number) {
    this.selectedImageIndex = String(index);
    this.showCarousel = true;
    this.showGallery = false;
  }

  closeCarousel() {
    console.log("Cerrando carrusel");

    this.showCarousel = false;
    this.showGallery = true;
  }
}






