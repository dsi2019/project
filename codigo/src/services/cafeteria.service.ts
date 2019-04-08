import​ { ​Injectable​ } ​from​ ​"@angular/core"​;
import​ { ​AngularFireDatabase​ } ​from​ ​"angularfire2/database"​;
import { Cafeteria } from "../models/cafeteriamodel";
import { Time} from "@angular/common";

@​Injectable​()
export class CafeteriaService{

    private cafeterias: Cafeteria[] = [
        {
        nombre: "Sabatini",
        campus: "Leganes",
        hora_de_abrir: {hours:9,minutes:0},
        hora_de_cerrar: {hours:17,minutes:30},
        foto_url: "../../assets/cafeterias/leganes_sabatini.jpg"
        },
        {
        nombre: "Padre Soler",
        campus: "Leganes",
        hora_de_abrir: {hours:9,minutes:0},
        hora_de_cerrar: {hours:17,minutes:30},
        foto_url: "../../assets/cafeterias/leganes_padre_soler.jpg"
        },
        {
            nombre: "Padre Soler",
            campus: "Leganes",
            hora_de_abrir: {hours:9,minutes:0},
            hora_de_cerrar: {hours:17,minutes:30},
            foto_url: "../../assets/cafeterias/leganes_padre_soler.jpg"
            },

    ];

    getCafeterias(){
        return this.cafeterias;
    }

}