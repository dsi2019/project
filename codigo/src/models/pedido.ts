import { Articulo } from "./articulo";

export interface Pedido{
    nombre_cliente: string;
    hora: string;
    comida: {articulo: Articulo[], cantidad: number[]}
}