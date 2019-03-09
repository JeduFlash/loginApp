import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './componentes/home-page/home-page.component';
import {PrivatePageComponent} from './componentes/private-page/private-page.component';
import {LoginPageComponent} from './componentes/login-page/login-page.component';
import {NotFoundPageComponent} from './componentes/not-found-page/not-found-page.component';
import {RegistraPageComponent} from './componentes/registra-page/registra-page.component';


const routes: Routes = [
   {path : '', component:HomePageComponent},
   {path : 'register',component:RegistraPageComponent},
   {path : 'privado',component:PrivatePageComponent},
   {path : 'login',component:LoginPageComponent},
   {path : '**',component:NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
