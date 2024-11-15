import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Cubo } from '../../models/cubo';
import { ServiceCubo } from '../../services/cubo.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrl: './pedido.component.css'
})
export class PedidoComponent implements OnInit {
  public cubos!: Array<Cubo>;
  @ViewChild("select") select!: ElementRef

  constructor(private _service: ServiceCubo, private _router: Router){}

  realizarPedido(): void {
    this._service.insertPedido(this.select.nativeElement.value).subscribe(response => {
      this._router.navigate(["/compras"])
    })
  }

  ngOnInit(): void {
    this._service.getCubos().subscribe(response => {
      this.cubos = response
    })

  }
}
