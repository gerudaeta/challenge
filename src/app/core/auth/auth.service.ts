import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import {UsuarioLogin} from '../../model/usuarioLogin.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseURL = environment.url;

  private _token: string;

  constructor(private http: HttpClient) { }

  public get token(): string {
    if (this._token != null) {
      return this._token;
    } else if (this._token == null && sessionStorage.getItem('token') != null) {
      this._token = sessionStorage.getItem('token');
      return this._token;
    }
    return null;
  }

  login(usuario: UsuarioLogin): Observable<UsuarioLogin> {
    let url = this.baseURL + `api/auth`;
    console.log(url);
    return this.http.post<UsuarioLogin>(url, usuario);
  }

  guardarToken(accessToken: string) {
    this._token = accessToken;
    sessionStorage.setItem('token', accessToken);
  }

  obtenerDatosToken(accessToken: string): any {
    if (accessToken != null) {
      return JSON.parse(atob(accessToken.split(".")[1]));
    }
    return null;
  }

  isAuthenticated(): boolean {
    let payload = this.obtenerDatosToken(this.token);
    if (payload != null) {
      return true;
    }
    return false;
  }

  logout(): void {
    this._token = null;
    sessionStorage.clear();
    sessionStorage.removeItem('token');
  }

}
