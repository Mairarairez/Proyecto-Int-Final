/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.portfolio.mgb.Service;

import com.portfolio.mgb.Entity.Project;
import com.portfolio.mgb.Repository.IRProject;
import java.util.List;
import java.util.Optional;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author sysworld
 */
@Service
@Transactional
public class ImpProjectService{
    @Autowired
    IRProject iprojectRes;
    
   public List<Project> list(){
        return iprojectRes.findAll();
    }
    
    public Optional<Project> getOne(long id){
        return iprojectRes.findById(id);
    }
    
    public Optional<Project> getByNameProject (String nameProject){
        return iprojectRes.findByNameProject(nameProject);
    }
    
    public void save(Project project){
        iprojectRes.save(project);
    }
    
    public void delete(long id){
        iprojectRes.deleteById(id);
    }
    
    public boolean existById(long id){
        return iprojectRes.existsById(id);
    }
    
    public boolean existsByNameProject(String nameProject){
        return iprojectRes.existsByNameProject(nameProject);
                
    }
    
}
