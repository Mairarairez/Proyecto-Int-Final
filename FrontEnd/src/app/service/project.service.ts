import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { project } from '../model/project';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  apiURL = environment.URL + 'Proyecto/'

  constructor (private http: HttpClient) { }

  public listProject(): Observable<project[]> {
    return this.http.get<project[]>(this.apiURL+ 'list');
  }

  public detailProject(id: number): Observable<project> {
    return this.http.get<project>(this.apiURL+ `detail/${id}`);
  }

  public saveProject(pro: project): Observable<any> {
    return this.http.post<any>(this.apiURL+ 'save', pro);
  }

  public updateProject(id: number, pro: project): Observable<any> {
    return this.http.put<any>(this.apiURL+ `update/${id}`, pro);
  }

  public deleteProject(id: number): Observable<any> {
    return this.http.delete<any>(this.apiURL+ `delete/${id}`);
  }
}