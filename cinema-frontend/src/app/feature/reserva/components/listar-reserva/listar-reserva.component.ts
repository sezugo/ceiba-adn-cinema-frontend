import { Component, OnInit } from '@angular/core';
import { Reserva } from '../../shared/model/reserva';
import { ReservaService } from '../../shared/service/reserva.service';

@Component({
  selector: 'app-listar-reserva',
  templateUrl: './listar-reserva.component.html',
  styleUrls: ['./listar-reserva.component.css']
})
export class ListarReservaComponent implements OnInit {

  reservas:Reserva[];

  constructor(protected ReservaService: ReservaService) { }

  ngOnInit(): void {
    this.ReservaService.listarReserva().subscribe(
      e => this.reservas=e
    )
  }

}
