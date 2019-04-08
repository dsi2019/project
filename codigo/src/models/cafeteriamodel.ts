import { Time } from "@angular/common";

export interface Cafeteria {
    nombre: string;
    campus: string;
    hora_de_abrir: Time;
    hora_de_cerrar: Time;
    foto_url: string;
 };