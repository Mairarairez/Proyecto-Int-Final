import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { project } from 'src/app/model/project';
import { ProjectService } from 'src/app/service/project.service';

@Component({
  selector: 'app-edit-pro',
  templateUrl: './edit-pro.component.html',
  styleUrls: ['./edit-pro.component.css']
})
export class EditProComponent implements OnInit {

  pro: project = null;

  constructor(private projectoService: ProjectService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.projectoService.detailProject(id).subscribe(
      data => {
        this.pro = data;
      }, err => {
        alert("La modificación Falló");
        this.router.navigate(['']);
      }
    )
  }

  onUpdateProject():void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.projectoService.updateProject(id, this.pro).subscribe(
      data => {
        alert("La modificación se realizo correctamente.");
        this.router.navigate(['']);
      }, err => {
        alert("La modificación Falló");
        this.router.navigate(['']);
      }
    )
  }

  volver(){
    this.router.navigate(['/'])
  }

}