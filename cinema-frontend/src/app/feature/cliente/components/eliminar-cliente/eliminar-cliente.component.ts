import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cliente } from '../../shared/model/cliente';
import { ClienteService } from '../../shared/service/cliente.service';

@Component({
  selector: 'app-eliminar-cliente',
  templateUrl: './eliminar-cliente.component.html',
  styleUrls: ['./eliminar-cliente.component.css']
})
export class EliminarClienteComponent implements OnInit {

  eliminarCliente:boolean = false;
  eliminarClienteForm:FormGroup;
  cliente:Cliente = new Cliente();

  constructor(private clienteService:ClienteService, private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.crearForm();
  }

  crearForm(){
    this.eliminarClienteForm = this.formBuilder.group({
      cedula: [null, Validators.required]
    })
  }


  delete(form, cedula:String):void{

    if(form.valid){
      
      console.log(this.cliente.cedula);
      this.clienteService.eliminarCliente(cedula).subscribe(
      e => this.cliente=e
    );
    this.cliente.cedula = '';
    this.eliminarCliente = true;
    }


    
  }


}
