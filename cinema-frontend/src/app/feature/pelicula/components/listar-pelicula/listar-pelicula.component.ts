import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../../shared/model/pelicula';
import { PeliculaService } from '../../shared/service/pelicula.service';

@Component({
  selector: 'app-listar-pelicula',
  templateUrl: './listar-pelicula.component.html',
  styleUrls: ['./listar-pelicula.component.css']
})
export class ListarPeliculaComponent implements OnInit {

  peliculas:Pelicula[];

  constructor(protected peliculaService: PeliculaService) { }

  ngOnInit(): void {
    this.peliculaService.listarPelicula().subscribe(
      e => this.peliculas=e
    )
  }

}
