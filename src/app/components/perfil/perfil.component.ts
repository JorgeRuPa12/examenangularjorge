import { Component, OnInit } from '@angular/core';
import { Userinfo } from '../../models/userInfo';
import { ServiceCubo } from '../../services/cubo.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent implements OnInit{
 public user!: Userinfo;

 constructor(private _service: ServiceCubo){}

  ngOnInit(): void {
    this._service.getUser().subscribe(response => {
      this.user = response
    })
  }
}
