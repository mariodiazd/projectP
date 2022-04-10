import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faFilm, faGift, faCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-concurso',
  templateUrl: './concurso.component.html',
  styleUrls: ['./concurso.component.css']
})
export class ConcursoComponent implements OnInit {

  regaloIcon = faGift;
  circleIcon = faCircle;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }


  goToPregunta1(){
    this.router.navigateByUrl('pregunta-1')
  }

}
