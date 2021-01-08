import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { Pelicula } from '../model/pelicula';



@Injectable({
  providedIn: 'root'
})

export class PeliculaService{

  private consultarUsuarioUrl = "http://localhost:8080/pelicula"  
  
  constructor(private http: HttpClient) {}
  
  public listarPelicula(): Observable<Pelicula[]> {
      return this.http.get<Pelicula[]>(this.consultarUsuarioUrl);
  }





}