//import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  crearCliente:boolean=false;
  crearClienteFallo:boolean=false;
  crearClienteForm:FormGroup;
  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$";




constructor(private clienteService: ClienteService, private formBuilder:FormBuilder) { }

  ngOnInit(): void {

    this.crearForm();
    
  }

  crearForm(){
    this.crearClienteForm = this.formBuilder.group({
      nombre: [null, Validators.required],
      apellido: [null, Validators.required],
      cedula: [null, Validators.required],
      celular: [null, Validators.required],
      dirrecion: [null, Validators.required],
      correo: [null, Validators.required],
    })
  }

  create(form){


    if(form.valid){
      const cliente:Cliente = {

        idCliente: null,
        apellido: form.value.apellido,
        cedula: form.value.cedula,
        nombre: form.value.nombre,
        correo: form.value.correo,
        dirrecion: form.value.dirrecion,
        celular: form.value.celular
      }

      this.clienteService.crearCliente(cliente).subscribe(
        e => this.cliente=e
      );
      this.cliente.nombre = '';
      this.cliente.apellido = '';
      this.cliente.cedula = '';
      this.cliente.celular = '';
      this.cliente.dirrecion = '';
      this.cliente.correo = '';
      this.crearCliente = true;
      this.crearClienteFallo=false;
    }
    else{
      this.crearClienteFallo=true;
    }
    
    
    
  }

  



}
