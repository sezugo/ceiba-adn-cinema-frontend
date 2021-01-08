import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../../shared/model/pelicula';
import { PeliculaService } from '../../shared/service/pelicula.service';

@Component({
  selector: 'app-crear-pelicula',
  templateUrl: './crear-pelicula.component.html',
  styleUrls: ['./crear-pelicula.component.css']
})
export class CrearPeliculaComponent implements OnInit {

  pelicula:Pelicula = new Pelicula();

  constructor( private peliculaService: PeliculaService ) { }

  ngOnInit(): void {
  }

  create():void{
    this.peliculaService.crearPelicula(this.pelicula).subscribe(
      e => this.pelicula=e
    );
    this.pelicula.nombre = '';
    this.pelicula.categoria = '';
    this.pelicula.publicada = '';
    this.pelicula.valor = '';
    
  }



}
