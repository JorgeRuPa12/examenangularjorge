import { Component, OnInit } from '@angular/core';
import { Cubo } from '../../models/cubo';
import { ServiceCubo } from '../../services/cubo.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-cubos',
  templateUrl: './cubos.component.html',
  styleUrl: './cubos.component.css'
})
export class CubosComponent implements OnInit {
  public cubos!: Array<Cubo>;
  public marca!: string;


  constructor(private _service: ServiceCubo, private _active: ActivatedRoute) {}

  ngOnInit(): void {
    this._active.params.subscribe((params: Params) => {
      let marca = params["marca"];
      this.marca = marca
      this._service.getCubosMarca(marca).subscribe((response) => {
        this.cubos = response
      })
    })
  }
}
