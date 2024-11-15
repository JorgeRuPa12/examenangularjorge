import { Component, OnInit } from '@angular/core';
import { Cubo } from '../../models/cubo';
import { ServiceCubo } from '../../services/cubo.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Comentario } from '../../models/comentario';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {
  public cubo!: Cubo;
  public comentarios!: Array<Comentario>;
  public hayComentarios: boolean;

  constructor(private _service: ServiceCubo, private _active: ActivatedRoute) {
    this.hayComentarios = false
  }

  ngOnInit(): void {
    this._active.params.subscribe((params: Params) => {
      let id = params["id"];
      this._service.findCubo(id).subscribe((response) => {
        this.cubo = response
      })

      this._service.getComentarios(id).subscribe((response) => {
        this.comentarios = response
        if (this.comentarios !== null){
          this.hayComentarios = true
        }
      })
    })
  }
}
