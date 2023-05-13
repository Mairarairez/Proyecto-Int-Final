import { Component, OnInit } from '@angular/core';
import { project } from 'src/app/model/project';
import { ProjectService } from 'src/app/service/project.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {
  window: any = window;

  project: project[] = [];

  constructor(public projectService: ProjectService, private tokenService: TokenService) { }

  isLogged = false;  

  ngOnInit(): void {
    this.getDataProject();

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

  }

  getDataProject(): void {
    this.projectService.listProject().subscribe(data => {this.project = data})
  }

  onDeletePro(id?: number): void {
    if(id != undefined){
      this.projectService.deleteProject(id).subscribe(
        data => {
          this.projectService.listProject().subscribe(data => {this.project = data});
          alert ("Se elimino correctamente el elemento selecionado.");
        },
        err => {
          alert ("No se puedo eliminar el proyecto selecionada");
        }
        )
      }
    }
  }
