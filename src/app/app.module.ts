import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ConcursoComponent } from './pages/concurso/concurso.component';
import { HomeComponent } from './pages/home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PreguntaUnoComponent } from './pages/pregunta-uno/pregunta-uno.component';
import { FormsModule } from '@angular/forms';
import { PreguntaDosComponent } from './pages/pregunta-dos/pregunta-dos.component';
import { PreguntaTresComponent } from './pages/pregunta-tres/pregunta-tres.component';
import { PreguntaCuatroComponent } from './pages/pregunta-cuatro/pregunta-cuatro.component';
import { PreguntaCincoComponent } from './pages/pregunta-cinco/pregunta-cinco.component';
import { PreguntaSeisComponent } from './pages/pregunta-seis/pregunta-seis.component';
import { PreguntaSieteComponent } from './pages/pregunta-siete/pregunta-siete.component';
import { PreguntaOchoComponent } from './pages/pregunta-ocho/pregunta-ocho.component';
import { PreguntaNuevaComponent } from './pages/pregunta-nueva/pregunta-nueva.component';
import { FinalComponent } from './pages/final/final.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    ConcursoComponent,
    HomeComponent,
    PreguntaUnoComponent,
    PreguntaDosComponent,
    PreguntaTresComponent,
    PreguntaCuatroComponent,
    PreguntaCincoComponent,
    PreguntaSeisComponent,
    PreguntaSieteComponent,
    PreguntaOchoComponent,
    PreguntaNuevaComponent,
    FinalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    FontAwesomeModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
