import { Component, OnInit } from '@angular/core';
import { Params, Router } from '@angular/router';
import { faArrowRight, faGift} from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.css']
})


export class FinalComponent implements OnInit {

  
  closeResult: string = '';
  regaloIcon = faGift;
  flechaIcon = faArrowRight;
  puntos:number = 0;
  showCorrecto:boolean = false;
  showIncorrecto:boolean = false;
  comprobado:boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private modalService: NgbModal
    
  ) { }

  ngOnInit(): void {
    var puntos:any = this.route.snapshot.paramMap.get('puntos');
    this.puntos = parseInt(puntos);
  }

  siguientePregunta(){
    this.router.navigateByUrl('pregunta-7/'+this.puntos);
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }


  openWPT(content:any) {

    if (this.puntos >= 10)
    {
      this.puntos = this.puntos - 10;
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }
    else
    {
      alert('¿No tienes puntos suficientes? Pregunta a tu novio como puedes conseguirlos')
    }
   
  }

  descargarEntradas(){
    let link = document.createElement("a");
        link.download = "entradas.pdf";
        link.href = "assets/pdf/1492T9JMX5F4.pdf";
        link.click();
     this.modalService.dismissAll();
  }


  openCena(content:any) {

    if (this.puntos >= 5)
    {
      this.puntos = this.puntos - 5;
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    } else
    {
      alert('¿No tienes puntos suficientes? Pregunta a tu novio como puedes conseguirlos')
    }
   
  }

  comprobarRespuestas(respuesta:any){

    var butonCorrecto = document.getElementById('correcto') as HTMLButtonElement;
    butonCorrecto.style.backgroundColor = '#47E5A7'

    if (respuesta == '3')
    {
      this.showCorrecto = true;
      this.puntos = this.puntos + 2;
    } else
    {
      this.showIncorrecto = true;
    }

    this.comprobado = true;

  }

}
