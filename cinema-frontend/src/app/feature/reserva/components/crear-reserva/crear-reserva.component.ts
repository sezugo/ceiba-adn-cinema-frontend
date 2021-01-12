import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/feature/cliente/shared/model/cliente';
import { ClienteService } from 'src/app/feature/cliente/shared/service/cliente.service';
import { Reserva } from '../../shared/model/reserva';
import { ReservaService } from '../../shared/service/reserva.service';

@Component({
  selector: 'app-crear-reserva',
  templateUrl: './crear-reserva.component.html',
  styleUrls: ['./crear-reserva.component.css']
})
export class CrearReservaComponent implements OnInit {

  clientes:Cliente[];
  reserva:Reserva = new Reserva();

  constructor(private reservaService: ReservaService, protected clienteService: ClienteService) { }

  ngOnInit(): void {
  }

  create():void{
    this.reservaService.crearReserva(this.reserva).subscribe(
      e => this.reserva=e
    );
    
    //this.pelicula.nombre = '';
  }

  listar():void{
    this.clienteService.listarCliente().subscribe(
      e => this.clientes=e
    )
  }

}
