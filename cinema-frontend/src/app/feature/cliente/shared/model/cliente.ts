export class Cliente {
    idCliente: number;
    nombre: string;
    apellido: string;
    cedula: string;
    celular: string;
    dirrecion: string;
    correo: string;

    constructor(idCliente: number, nombre: string, apellido: string, cedula: string, celular: string,
        direccion: string, correo: string  ) {
        this.idCliente = idCliente;
        this.nombre = nombre;
        this.apellido = apellido;
        this.cedula = cedula;
        this.celular = celular;
        this.dirrecion = direccion;
        this.correo = correo;
    }
}
