import { Component } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { FuncionesGeneralesService } from 'src/app/servicios/generales/funciones-generales.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent {

  constructor(private datosPorfolio: PorfolioService, private funciones: FuncionesGeneralesService) {

  }
  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      console.log(data);
    });
    
  }
  cambiarParrafo(idEtiqueta: any){
    this.funciones.cambiarParrafo(idEtiqueta);
  }

  abrirModal(event: MouseEvent){

    const boton = event.currentTarget as HTMLElement;

    // Obtener el ID del elemento
    const id = boton.id;
    console.log(id);

    let modal:any = document.getElementById("modal_" + id);
    modal.style.display = "block";
  }

}
