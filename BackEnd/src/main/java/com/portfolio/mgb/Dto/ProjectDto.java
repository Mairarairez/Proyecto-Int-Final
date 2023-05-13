
package com.portfolio.mgb.Dto;

import javax.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class ProjectDto {
    private String imgProject;   
    @NotBlank
    private String nameProject; 
    @NotBlank
    private String descriptionProject; 
    
   private String linkProject;

    public ProjectDto(String imgProject, String nameProject, String descriptionProject, String linkProject) {
       this.imgProject = imgProject;
        this.nameProject = nameProject;
        this.descriptionProject = descriptionProject;
       this.linkProject = linkProject;
    }
}
