import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { Reserva } from '../model/reserva';



@Injectable({
  providedIn: 'root'
})

export class ReservaService{

  private consultarUsuarioUrl = "http://localhost:8080/reserva"  
  
  constructor(private http: HttpClient) {}
  
  public listarReserva(): Observable<Reserva[]> {
      return this.http.get<Reserva[]>(this.consultarUsuarioUrl);
  }

  public crearReserva(reserva:Reserva): Observable<Reserva>{
    return this.http.post<Reserva>(this.consultarUsuarioUrl, reserva);
  }

  public eliminarReserva(idReserva:number): Observable<Reserva>{
    return this.http.delete<Reserva>(this.consultarUsuarioUrl+'/'+idReserva);
  }

}