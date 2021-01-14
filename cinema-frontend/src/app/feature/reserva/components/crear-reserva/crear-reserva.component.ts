import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/feature/cliente/shared/model/cliente';
import { ClienteService } from 'src/app/feature/cliente/shared/service/cliente.service';
import { Pelicula } from 'src/app/feature/pelicula/shared/model/pelicula';
import { PeliculaService } from 'src/app/feature/pelicula/shared/service/pelicula.service';
import { Reserva } from '../../shared/model/reserva';
import { ReservaService } from '../../shared/service/reserva.service';

@Component({
  selector: 'app-crear-reserva',
  templateUrl: './crear-reserva.component.html',
  styleUrls: ['./crear-reserva.component.css']
})
export class CrearReservaComponent implements OnInit {

  clientes:Cliente[];
  peliculas:Pelicula[];
  reserva:Reserva = new Reserva();
  cliente:Cliente = new Cliente();
  

  constructor(private reservaService: ReservaService, protected clienteService: ClienteService, protected peliculaService: PeliculaService) { }

  ngOnInit(): void {
    this.listarComponentes();
  }

  
  listarComponentes(){
    this.clienteService.listarCliente().subscribe(
      e => this.clientes=e
    );
    this.peliculaService.listarPelicula().subscribe(
      e => this.peliculas=e
    );
  }


  create():void{

    this.clientes.forEach(cliente =>{
      
      this.reserva.cliente = cliente;
      this.reserva.cliente.nombre = null;
      this.reserva.cliente.apellido = null;
    });

    this.peliculas.forEach(pelicula => {
      this.reserva.pelicula = pelicula;
      this.reserva.pelicula.nombre = null;
    })

  

    this.reservaService.crearReserva(this.reserva).subscribe(
      e => this.reserva=e
    );
    
    //this.pelicula.nombre = '';

  }

}
