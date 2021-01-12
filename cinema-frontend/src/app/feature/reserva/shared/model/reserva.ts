import { Cliente } from "src/app/feature/cliente/shared/model/cliente";
import { Pelicula } from "src/app/feature/pelicula/shared/model/pelicula";


export class Reserva{
    idReserva: number;
    cliente = new Cliente();
    pelicula = new Pelicula();
    fecha: Date;
    valorTotal: number;
}