import { Component } from '@angular/core';
import { CabeceraComponent } from '../../../componentes/cabecera/cabecera.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CabeceraComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
