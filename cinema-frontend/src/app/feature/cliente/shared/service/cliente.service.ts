import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { Cliente } from '../model/cliente';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  
  private consultarUsuarioUrl = "http://localhost:8080/cliente"  
  
  constructor(private http: HttpClient) {}
  
  public listarCliente(): Observable<Cliente[]> {
      return this.http.get<Cliente[]>(this.consultarUsuarioUrl);
  }

  public crearCliente(cliente:Cliente): Observable<Cliente>{
    return this.http.post<Cliente>(this.consultarUsuarioUrl, cliente);
  }

  public eliminarCliente(cedula:String): Observable<Cliente>{
    return this.http.delete<Cliente>(this.consultarUsuarioUrl+'/'+cedula);
  }
}
