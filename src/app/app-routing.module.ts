import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConcursoComponent } from './pages/concurso/concurso.component';
import { FinalComponent } from './pages/final/final.component';
import { HomeComponent } from './pages/home/home.component';
import { PreguntaCincoComponent } from './pages/pregunta-cinco/pregunta-cinco.component';
import { PreguntaCuatroComponent } from './pages/pregunta-cuatro/pregunta-cuatro.component';
import { PreguntaDosComponent } from './pages/pregunta-dos/pregunta-dos.component';
import { PreguntaNuevaComponent } from './pages/pregunta-nueva/pregunta-nueva.component';
import { PreguntaOchoComponent } from './pages/pregunta-ocho/pregunta-ocho.component';
import { PreguntaSeisComponent } from './pages/pregunta-seis/pregunta-seis.component';
import { PreguntaSieteComponent } from './pages/pregunta-siete/pregunta-siete.component';
import { PreguntaTresComponent } from './pages/pregunta-tres/pregunta-tres.component';
import { PreguntaUnoComponent } from './pages/pregunta-uno/pregunta-uno.component';

const routes: Routes = [
  { path: 'concurso', component: ConcursoComponent },
  { path: 'pregunta-1', component: PreguntaUnoComponent },
  { path: 'pregunta-2/:puntos', component: PreguntaDosComponent },
  { path: 'pregunta-3/:puntos', component: PreguntaTresComponent },
  { path: 'pregunta-4/:puntos', component: PreguntaCuatroComponent },
  { path: 'pregunta-5/:puntos', component: PreguntaCincoComponent },
  { path: 'pregunta-6/:puntos', component: PreguntaSeisComponent },
  { path: 'pregunta-7/:puntos', component: PreguntaSieteComponent },
  { path: 'pregunta-8/:puntos', component: PreguntaOchoComponent },
  { path: 'pregunta-9/:puntos', component: PreguntaNuevaComponent },
  { path: 'final/:puntos', component: FinalComponent },
  { path: '', component: HomeComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
