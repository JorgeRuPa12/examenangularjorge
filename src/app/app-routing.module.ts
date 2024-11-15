import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DetailsComponent } from './components/details/details.component';
import { CubosComponent } from './components/cubos/cubos.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ComprasComponent } from './components/compras/compras.component';
import { PedidoComponent } from './components/pedido/pedido.component';

const routes: Routes = [
  {
    path: "", component: HomeComponent
},
{
    path: "login", component: LoginComponent
},
{
    path: "register", component: RegisterComponent
},
{
    path: "details/:id", component: DetailsComponent
},
{
    path: "cubos/:marca", component: CubosComponent
},
{
    path: "perfil/:id", component: PerfilComponent
},
{
    path: "compras", component: ComprasComponent
},
{
    path: "pedido", component: PedidoComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
