import { Component, OnInit } from '@angular/core';
import { Params, Router } from '@angular/router';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pregunta-dos',
  templateUrl: './pregunta-dos.component.html',
  styleUrls: ['./pregunta-dos.component.css']
})


export class PreguntaDosComponent implements OnInit {

  flechaIcon = faArrowRight;
  puntos:number = 0;
  showCorrecto:boolean = false;
  showIncorrecto:boolean = false;
  comprobado:boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute
    
  ) { }

  ngOnInit(): void {
    var puntos:any = this.route.snapshot.paramMap.get('puntos');
    this.puntos = parseInt(puntos);
  }

  siguientePregunta(){
    this.router.navigateByUrl('pregunta-3/'+this.puntos);
  }

  comprobarRespuestas(respuesta:any){

    var butonCorrecto = document.getElementById('correcto') as HTMLButtonElement;
    butonCorrecto.style.backgroundColor = '#47E5A7'

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
