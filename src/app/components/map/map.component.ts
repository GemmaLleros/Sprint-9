import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Map, tileLayer } from 'leaflet';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, AfterViewInit {

  map: any;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.map = new Map('map').setView([41.3717389, 2.1618274], 13);

    tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    const fixedLocation: [number, number] = [41.3717389, 2.1618274];
    const fixedMarker = L.marker(fixedLocation);
    fixedMarker.addTo(this.map);
    fixedMarker.bindPopup("<b>Carrer Tapioles, 69.</b>").openPopup();
  }
}





