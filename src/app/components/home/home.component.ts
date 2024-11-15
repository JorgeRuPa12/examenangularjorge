import { Component, OnInit } from '@angular/core';
import { Cubo } from '../../models/cubo';
import { ServiceCubo } from '../../services/cubo.service';
import { Userinfo } from '../../models/userInfo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  public cubos!: Array<Cubo>;
  
  constructor(private _service: ServiceCubo) {}

  ngOnInit(): void {
    this._service.getCubos().subscribe(response => {
      this.cubos = response
    })

  }
}
