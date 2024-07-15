import { Routes } from "@angular/router";
import { CuadroComponent } from "./cuadro/cuadro.component";
import { ListaComponent } from "./lista/lista.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

export const HOME_ROUTES: Routes = [
    { path: 'cuadro', component: CuadroComponent },
    { path: 'lista', component: ListaComponent },
    { path: '', component: DashboardComponent }
];