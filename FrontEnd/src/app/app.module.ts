import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HysComponent } from './components/hys/hys.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { DeslizarComponent } from './components/deslizar/deslizar.component';
import { FooterComponent } from './components/footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { interceptorProvider } from './service/interceptor-service';
;


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    HysComponent,
    ProyectoComponent,
    DeslizarComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
     ],
  imports: [
    FormsModule,
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
