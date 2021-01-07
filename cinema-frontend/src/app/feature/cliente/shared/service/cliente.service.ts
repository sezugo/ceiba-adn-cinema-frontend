import { Injectable } from '@angular/core';
//import { HttpService } from '@core-service/http.service';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
//import { environment } from 'src/environments/environment';
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


  /*
  
  public consultar() {
    return this.http.doGet<Cliente[]>(`${environment.endpoint}/tiposFamilia`, this.http.optsName('consultar productos'));
  }

  
  public guardar(cliente: Cliente) {
    return this.http.doPost<Cliente, boolean>(`${environment.endpoint}/productos`, cliente,
                                                this.http.optsName('crear/actualizar productos'));
  }

  public eliminar(cliente: Cliente) {
    return this.http.doDelete<boolean>(`${environment.endpoint}/productos/${cliente.cedula}`,
                                                 this.http.optsName('eliminar productos'));
  }
  */
}
