import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pregunta-siete',
  templateUrl: './pregunta-siete.component.html',
  styleUrls: ['./pregunta-siete.component.css']
})


export class PreguntaSieteComponent implements OnInit {

  flechaIcon = faArrowRight;
  puntos:number = 0;
  showCorrecto:boolean = false;
  showIncorrecto:boolean = false
  fechaCarlotaRespuesta:string = new Date().toLocaleString();
  fechaAyronRespuesta:Date = new Date();
  fechaMarioRespuesta:any;
  showErrorMario:boolean = false;
  showErrorCarlota:boolean = false;
  showErrorAyron:boolean = false;
  comprobado:boolean = false;

  constructor(
    private router: Router, private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    var puntos:any = this.route.snapshot.paramMap.get('puntos');
    this.puntos = parseInt(puntos);
  }

  siguientePregunta(){
    this.router.navigateByUrl('pregunta-8/'+this.puntos);
  }

  comprobarRespuestas(respuesta:any){



    if (respuesta == '3')
    {
      this.showCorrecto = true;
      this.puntos++
    } else
    {
      this.showIncorrecto = true;
    }

    this.comprobado = true;

  }
  
}
