import { Component, OnInit } from '@angular/core';
import { Reserva } from '../../shared/model/reserva';
import { ReservaService } from '../../shared/service/reserva.service';

@Component({
  selector: 'app-eliminar-reserva',
  templateUrl: './eliminar-reserva.component.html',
  styleUrls: ['./eliminar-reserva.component.css']
})
export class EliminarReservaComponent implements OnInit {

  reserva:Reserva = new Reserva();

  constructor(private reservaService:ReservaService) { }

  ngOnInit(): void {
  }

  delete(idReserva:number):void{
    console.log(this.reserva.idReserva);
    this.reservaService.eliminarReserva(idReserva).subscribe(
      e => this.reserva=e
    );
    this.reserva.idReserva = null;
  }



}
