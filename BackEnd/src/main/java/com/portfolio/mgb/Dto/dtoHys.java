
package com.portfolio.mgb.Dto;

import javax.validation.constraints.NotBlank;


public class dtoHys {
   // @NotBlank
   // private int id;
     @NotBlank
    private String nombre;
      @NotBlank
    private int porcentaje;

    public dtoHys() {
    }

    public dtoHys(String nombre, int porcentaje) {
        this.nombre = nombre;
        this.porcentaje = porcentaje;
    }

   // public int getId() {
   //     return id;
   // }

   // public void setId(int id) {
   //     this.id = id;
   // }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public int getPorcentaje() {
        return porcentaje;
    }

    public void setPorcentaje(int porcentaje) {
        this.porcentaje = porcentaje;
    }
      
      
}
