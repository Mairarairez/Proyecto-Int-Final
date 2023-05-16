package com.portfolio.mgb.Controller;



import com.portfolio.mgb.Entity.Persona;
import com.portfolio.mgb.Interface.IPersonaService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/personas")
@CrossOrigin(origins = {"https://porfolio-mairaramirez.onrender.com", "https://front-end-porfolio-maira.web.app"})

public class PersonaController {
    @Autowired 
    IPersonaService ipersonaService;
    
    @GetMapping("/traer")
    public List<Persona> getPersona(){
        return ipersonaService.getPersona();
    }
    
    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/crear")
    public String createPersona(@RequestBody Persona persona){
        ipersonaService.savePersona(persona);
        return "La persona fue creada correctamente";
    }
    
    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/borrar/{id}")
    public String deletePersona(@PathVariable Integer id){
        ipersonaService.deletePersona(id);
        return "La persona fue eliminada correctamente";
    }
    
    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/editar/{id}")
    public Persona editPersona(@PathVariable("id") Integer id,
                              @RequestBody Persona pers){
        Persona persona = ipersonaService.findPersona(pers.getId());
        
        persona.setNombre(pers.getNombre());
        persona.setApellido(pers.getApellido());
        persona.setDescripcion(pers.getDescripcion());
        persona.setImg(pers.getImg());
        
        ipersonaService.savePersona(persona);
        return persona;
    }
    
    @GetMapping("/traer/perfil/{id}")
    public Persona findPersona(@PathVariable Integer id) {
    return ipersonaService.findPersona(7);
}
   
}