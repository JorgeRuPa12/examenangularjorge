import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComprasComponent } from './components/compras/compras.component';
import { CubosComponent } from './components/cubos/cubos.component';
import { DetailsComponent } from './components/details/details.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { PedidoComponent } from './components/pedido/pedido.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { ServiceCubo } from './services/cubo.service';

@NgModule({
  declarations: [
    AppComponent,
    ComprasComponent,
    CubosComponent,
    DetailsComponent,
    HomeComponent,
    LoginComponent,
    MenuComponent,
    PedidoComponent,
    PerfilComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [provideHttpClient(), ServiceCubo],
  bootstrap: [AppComponent]
})
export class AppModule { }
