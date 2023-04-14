import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FuncionesGeneralesService {

  constructor() { }

  cambiarParrafo(event: MouseEvent){

    const boton = event.currentTarget as HTMLElement;

    // Obtener el ID del elemento
    const id = boton.id;

    let newTexto:any = document.getElementById("input_" + id);
    newTexto = newTexto.value;

    // Código de la función aquí
    let texto:any = document.getElementById("text-" + id);
    texto.innerHTML = newTexto
    

    let modal:any = document.getElementById("modal_edit_" + id);
    modal.style.display = "none";
  
    alert("Se ha cambiado el texto por :" + newTexto);
  }

}
