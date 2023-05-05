
package com.portfolio.mgb.Service;

import com.portfolio.mgb.Entity.Experiencia;
import com.portfolio.mgb.Repository.RExperiencia;
import java.util.List;
import java.util.Optional;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class SExperiencia {
     @Autowired
     RExperiencia rExperiencia;
     
     public List<Experiencia> list(){
         return rExperiencia.findAll(); //arma una lista experiencias. 
     }
     
     public Optional<Experiencia> getOne(int id){
         return rExperiencia.findById(id); //busca experiencia por id. 
     }
     
     public Optional<Experiencia> getByNombreE(String nombreE){
         return rExperiencia.findByNombreE(nombreE); //busca experiencia por nombre.
     }
     
     public void save(Experiencia expe){
         rExperiencia.save(expe); //guarda tipo de dato experiencia.
     }
     
     public void delete(int id){
         rExperiencia.deleteById(id); //borra por id.
     }
     
     public boolean existsById(int id){ 
         return rExperiencia.existsById(id); 
     }
     
     public boolean existsByNombreE(String nombreE){
         return rExperiencia.existsByNombreE(nombreE);
     }
}