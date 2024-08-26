import { Routes } from "@angular/router";
import { CuadroComponent } from "./cuadro/cuadro.component";
import { PokemonComponent } from "./pokemon/pokemon.component";

export const HOME_ROUTES: Routes = [
    { path: 'cuadro/:page', component: CuadroComponent },
    { path: 'pokemon/:id', component: PokemonComponent },
    { path: '', component: CuadroComponent }
];