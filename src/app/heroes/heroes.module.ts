import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from "./heroe/heroe.component";
import { ListadoComponent } from "./listado/listado.component";


@NgModule({
    declarations:[
        HeroeComponent,
        ListadoComponent
    ],
    exports:[
        ListadoComponent
    ],
    imports:[
        /* Solo modulos que van aauí */
        //El commonModule ayuda al *ngif y al ngfor
        CommonModule
    ]
})

export class HeroesModule{

}

