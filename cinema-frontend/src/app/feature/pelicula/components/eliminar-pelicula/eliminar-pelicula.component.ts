import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../../shared/model/pelicula';
import { PeliculaService } from '../../shared/service/pelicula.service';

@Component({
  selector: 'app-eliminar-pelicula',
  templateUrl: './eliminar-pelicula.component.html',
  styleUrls: ['./eliminar-pelicula.component.css']
})
export class EliminarPeliculaComponent implements OnInit {

  pelicula:Pelicula = new Pelicula();

  constructor(private peliculaService:PeliculaService) { }

  ngOnInit(): void {
  }


  delete(idPelicula:number):void{
    console.log(this.pelicula.idPelicula);
    this.peliculaService.eliminarPelicula(idPelicula).subscribe(
      e => this.pelicula=e
    );
    this.pelicula.idPelicula = null;
  }


}
