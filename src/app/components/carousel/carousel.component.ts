import { Component, OnInit } from '@angular/core';  
import { Router } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';  
@Component({  
  selector: 'app-carousel',  
  templateUrl: './carousel.component.html',  
  styleUrls: ['./carousel.component.css']  
})  
export class CarouselComponent implements OnInit {  

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  
  constructor(config: NgbCarouselConfig, private router: Router) {  
    config.interval = 4000;  
    config.wrap = true;  
    config.keyboard = false;  
    config.pauseOnHover = true;  
  }  
  ngOnInit() {  
  }  

  meRajo(){
    alert('Esta opción no esta disponible  ¡¡¡¡¡SABIA QUE IBAS A PINCHAR!!!!!!')
  }

  goToConcurso(){
    this.router.navigateByUrl('concurso');
  }
  
}  

