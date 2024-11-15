import { Component, DoCheck, OnInit } from '@angular/core';
import { ServiceCubo } from '../../services/cubo.service';
import { Cubo } from '../../models/cubo';
import { Userinfo } from '../../models/userInfo';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit, DoCheck {
 public estado: boolean;
 public marcas!: Array<string>
 public userinfo!: Userinfo;

 constructor(private _service: ServiceCubo) {
  this.estado = false
 }

 ngOnInit(): void {
   this._service.getMarcas().subscribe(response => {
    this.marcas = response
   })

   this.comprobarEstado()

   this._service.getUser().subscribe(response => {
    this.userinfo = response
   })
 }

 comprobarEstado(): void {
  if(localStorage.getItem('token') !== null) {
    this.estado = true
  }
 }

 cerrarSesion(): void {
  alert("Has cerrado Sesión");
  localStorage.removeItem('token')
  this.estado = false
 }

 ngDoCheck(): void {
  this.comprobarEstado()
 }
 
}
