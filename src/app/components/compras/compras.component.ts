import { Component, OnInit } from '@angular/core';
import { Compra } from '../../models/compra';
import { ServiceCubo } from '../../services/cubo.service';
import { Userinfo } from '../../models/userInfo';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrl: './compras.component.css'
})
export class ComprasComponent implements OnInit{
  public compras!: Array<Compra>;
  public user!: Userinfo

  constructor(private _service: ServiceCubo) {}

  ngOnInit(): void {
    this._service.getCompras().subscribe(response => {
      this.compras = response
    })
    

    this._service.getUser().subscribe(response => {
      this.user = response
    })
  }
}
