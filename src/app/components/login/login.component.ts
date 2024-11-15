import { Component, ElementRef, ViewChild } from '@angular/core';
import { User } from '../../models/user';
import { ServiceCubo } from '../../services/cubo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public user!: User;
  @ViewChild("email") email!: ElementRef;
  @ViewChild("password") password!: ElementRef;

  constructor(private _service: ServiceCubo, private _router: Router) {}


  logIn(): void {
    let user = new User(this.email.nativeElement.value, this.password.nativeElement.value)
    this._service.logIn(user).subscribe(response => {
      localStorage.setItem('token', response.response)
      this._router.navigate(['/'])
    })
  }
}
