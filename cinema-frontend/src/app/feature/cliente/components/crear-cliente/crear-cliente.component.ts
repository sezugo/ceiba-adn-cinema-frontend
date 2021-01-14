import { Component, OnInit } from '@angular/core';
//import { Router } from '@angular/router';
import { Cliente } from '../../shared/model/cliente';
import { ClienteService } from '../../shared/service/cliente.service';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent implements OnInit {

 
  cliente:Cliente = new Cliente();
  eliminarCliente:boolean=false;


constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    
  }

  create(){

    this.clienteService.crearCliente(this.cliente).subscribe(
      e => this.cliente=e
    );
    this.cliente.nombre = '';
    this.cliente.apellido = '';
    this.cliente.cedula = '';
    this.cliente.celular = '';
    this.cliente.dirrecion = '';
    this.cliente.correo = '';
    this.eliminarCliente = true;
    
  }

  



}
