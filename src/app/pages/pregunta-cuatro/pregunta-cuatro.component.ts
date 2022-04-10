import { Component, OnInit } from '@angular/core';
import { Params, Router } from '@angular/router';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pregunta-cuatro',
  templateUrl: './pregunta-cuatro.component.html',
  styleUrls: ['./pregunta-cuatro.component.css']
})


export class PreguntaCuatroComponent implements OnInit {

  photos = [
    {
      id: 1,
      src: '../../../assets/img/c9ed853b-9b66-4091-8a03-56cf5fead856.JPG',
      order: 3
    },
    {
      id: 2,
      src: '../../../assets/img/IMG_1024.jpg',
      order: 1,
    },
    {
      id: 3,
      src: '../../../assets/img/IMG_2522.jpg',
      order: 2
    },
    {
      id: 4,
      src: '../../../assets/img/IMG_4167.jpg',
      order: 4
    },
  ]

  color:any;
  respuesta = '';
  showOrder:boolean = false;
  flechaIcon = faArrowRight;
  puntos:number = 0;
  showCorrecto:boolean = false;
  showIncorrecto:boolean = false;
  comprobado:boolean = false;
  respuestaCorrecta = '2314'

  constructor(
    private router: Router,
    private route: ActivatedRoute
    
  ) { }

  ngOnInit(): void {
    var puntos:any = this.route.snapshot.paramMap.get('puntos');
    this.puntos = parseInt(puntos);
  }

  siguientePregunta(){
    this.router.navigateByUrl('pregunta-5/'+this.puntos);
  }

  comprobarRespuestas(respuesta:any){

    if (this.respuesta == this.respuestaCorrecta)
    {
      this.showCorrecto = true;
      this.puntos = this.puntos +3;
      this.color = '#47E5A7'
    } else
    {
      this.showIncorrecto = true;
      this.color = '#EC6044'
     
    }
    this.showOrder = true;
    this.comprobado = true;

  }

}
