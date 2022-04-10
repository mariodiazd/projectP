import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pregunta-uno',
  templateUrl: './pregunta-uno.component.html',
  styleUrls: ['./pregunta-uno.component.css']
})


export class PreguntaUnoComponent implements OnInit {

  flechaIcon = faArrowRight;
  puntos:number = 0;
  fechaCarlotaRespuesta:string = new Date().toLocaleString();
  fechaAyronRespuesta:Date = new Date();
  fechaMarioRespuesta:any;
  showErrorMario:boolean = false;
  showErrorCarlota:boolean = false;
  showErrorAyron:boolean = false;
  comprobado:boolean = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  siguientePregunta(){
    this.router.navigateByUrl('pregunta-2/'+this.puntos);
  }

  comprobarRespuestas(){

    if (!this.fechaMarioRespuesta  || !this.fechaCarlotaRespuesta || !this.fechaAyronRespuesta)
    {
      alert('Rellena las 3 fechas');
    } else
    {
      this.puntos = 0;

    var fechaMario = "1993-05-13"
    var fechaAyron = "2019-08-15"
    var fechaCarlota = "2000-11-07"
    if (fechaMario == this.fechaMarioRespuesta.toLocaleString())
    {
      
      this.puntos++
    }
    else
    {
      this.showErrorMario = true;
    }


    if (fechaAyron == this.fechaAyronRespuesta.toLocaleString())
    {
      this.puntos++
    } else
    {
      this.showErrorAyron = true;
    }

    if (fechaCarlota == this.fechaCarlotaRespuesta.toLocaleString())
    {
      this.puntos++
    }
    else
    {
      this.showErrorCarlota = true;
    }
    this.comprobado = true;
    }

    
  }

}
