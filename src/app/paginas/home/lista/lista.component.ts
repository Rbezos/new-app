import { Component } from '@angular/core';
import { CabeceraComponent } from '../../../componentes/cabecera/cabecera.component';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [CabeceraComponent],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {

}
