import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';

import { ListarVeteranoComponent } from './listar-veterano/listar-veterano.component';
import { AddVeteranoComponent } from './add-veterano/add-veterano.component';

import { ListarBeneficioComponent } from './listar-beneficio/listar-beneficio.component';
import { AddBeneficioComponent } from './add-beneficio/add-beneficio.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    ListarVeteranoComponent,
    AddVeteranoComponent,
    ListarBeneficioComponent,
    AddBeneficioComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,  
    FormsModule,   
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },

      { path: 'listar-veterano', component: ListarVeteranoComponent },
      { path: 'register-veterano', component: AddVeteranoComponent },
      { path: 'veterano/edit/:idveterano', component: AddVeteranoComponent },

      { path: 'listar-beneficio', component: ListarBeneficioComponent },
      { path: 'register-beneficio', component: AddBeneficioComponent },
      { path: 'beneficio/edit/:idbeneficios', component: AddBeneficioComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
