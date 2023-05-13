import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia/edit-experiencia.component';
import { NeweducacionComponent } from './components/educacion/neweducacion/neweducacion.component';
import { EditeducacionComponent } from './components/educacion/editeducacion/editeducacion.component';
import { NewSkillComponent } from './components/hys/new-skill/new-skill.component';
import { EditSkillComponent } from './components/hys/edit-skill/edit-skill.component';
import { NewProComponent } from './components/proyecto/new-pro/new-pro.component';
import { EditProComponent } from './components/proyecto/edit-pro/edit-pro.component';

const routes: Routes = [
  {
    path:'', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'nuevaexp', component: NewExperienciaComponent},
    {path: 'editexp/:id', component: EditExperienciaComponent},
    {path: 'nuevaedu', component: NeweducacionComponent},
    {path: 'editedu/:id', component: EditeducacionComponent},
    {path: 'newskill', component: NewSkillComponent},
    {path: 'editskill/:id', component: EditSkillComponent},
    {path:'newProject', component: NewProComponent},
   {path:'editProject/:id', component: EditProComponent}
   // {path: '', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
