import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../shared/model/cliente';
import { ClienteService } from '../../shared/service/cliente.service';

@Component({
  selector: 'app-eliminar-cliente',
  templateUrl: './eliminar-cliente.component.html',
  styleUrls: ['./eliminar-cliente.component.css']
})
export class EliminarClienteComponent implements OnInit {

  eliminarCliente:boolean = false;

  cliente:Cliente = new Cliente();

  constructor(private clienteService:ClienteService) { }

  ngOnInit(): void {
  }

  delete(cedula:String):void{
    console.log(this.cliente.cedula);
    this.clienteService.eliminarCliente(cedula).subscribe(
      e => this.cliente=e
    );
    this.cliente.cedula = '';
    this.eliminarCliente = true;
  }


}
