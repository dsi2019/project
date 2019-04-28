import { Articulo } from "./articulo";

export interface Pedido{
    nombre_cliente: string;
    comida: {articulos: Articulo[], cantidad: number[]}
}