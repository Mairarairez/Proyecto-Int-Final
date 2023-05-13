package com.portfolio.mgb.Repository;

import com.portfolio.mgb.Entity.Project;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
   
public interface IRProject  extends JpaRepository <Project, Long> {
    public Optional<Project> findByNameProject (String nameProject);
    
    public boolean existsByNameProject(String nameProject);    
}
    
