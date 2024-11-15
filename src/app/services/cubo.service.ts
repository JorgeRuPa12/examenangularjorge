import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable()
export class ServiceCubo {
  private apiUrl = environment.urlApi;
  
  constructor(private _http: HttpClient) {}

  // Método para obtener cubos
  getCubos(): Observable<any> {
    const url = `${this.apiUrl}api/Cubos`;
    return this._http.get(url);
  }

  // Método para obtener marcas
  getMarcas(): Observable<any> {
    const url = `${this.apiUrl}api/Cubos/Marcas`;
    return this._http.get(url);
  }

  // Método para buscar un cubo por ID
  findCubo(id: string): Observable<any> {
    const url = `${this.apiUrl}api/Cubos/${id}`;
    return this._http.get(url);
  }

  // Método para obtener comentarios de un cubo
  getComentarios(id: string): Observable<any> {
    const url = `${this.apiUrl}api/ComentariosCubo/GetComentariosCubo/${id}`;
    return this._http.get(url);
  }

  // Método para obtener cubos por marca
  getCubosMarca(marca: string): Observable<any> {
    const url = `${this.apiUrl}api/Cubos/CubosMarca/${marca}`;
    return this._http.get(url);
  }

  // Método para hacer login
  logIn(user: any): Observable<any> {
    const url = `${this.apiUrl}api/manage/login`;
    return this._http.post(url, user);
  }

  // Método para obtener el usuario logueado
  getUser(): Observable<any> {
    const token = localStorage.getItem('token');
    const url = `${this.apiUrl}api/Manage/PerfilUsuario`;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this._http.get(url, { headers });
  }

  // Método para obtener las compras del usuario
  getCompras(): Observable<any> {
    const token = localStorage.getItem('token');
    const url = `${this.apiUrl}api/Compra/ComprasUsuario`;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this._http.get(url, { headers });
  }

  // Método para insertar un pedido
  insertPedido(id: string): Observable<any> {
    const token = localStorage.getItem('token');
    const url = `${this.apiUrl}api/Compra/InsertarPedido/${id}`;
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${token}`);
    return this._http.post(url, {}, { headers });
  }
}