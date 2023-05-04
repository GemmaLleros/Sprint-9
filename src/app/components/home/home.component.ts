import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from 'src/app/shared/header/header.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NgbCarouselConfig]
 
})
export class HomeComponent {

  constructor( private _config:NgbCarouselConfig){
    _config.interval=2500;
    _config.pauseOnHover=true;
  }

  series:any[]=[

    {
      name:'1',
      img: '../../../assets/img.prueba/kitchen.jpg',
      
    },

    { name:'2',
      img: '../../../assets/img.prueba/bedroom.jpg',
    },
    {
      name:'3',
      img: '../../../assets/img.prueba/living-room.jpg',
    },
  ]

}
