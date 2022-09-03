import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { RegistroClientes } from './registro-clientes';
@Injectable({
  providedIn: 'root'
})
export class RegistroClientesService {

  private apiUrl = 'http://127.0.0.1:8000/api/registro/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  public registroClientes: RegistroClientes[] = [];
  constructor(private httpClient: HttpClient) { }

    getRegistroDia(): Observable<RegistroClientes[]>{
      return this.httpClient.get<RegistroClientes[]>(this.apiUrl);
    }
    create(registro: any): Observable<RegistroClientes>{
      return this.httpClient.post<RegistroClientes>(this.apiUrl, JSON.stringify(registro), this.httpOptions)
    }
    find(id: number): Observable<RegistroClientes> {
      return this.httpClient.get<RegistroClientes>(this.apiUrl + id)
    }
    update(id: number, registro: any): Observable<RegistroClientes>{
      return this.httpClient.put<RegistroClientes>(this.apiUrl + id, JSON.stringify(registro), this.httpOptions)
    }
  errorHandler(error: { error: { message: string; }; status: any; message: any; }) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
