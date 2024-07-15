import { Component } from '@angular/core';
import { CabeceraComponent } from '../../../componentes/cabecera/cabecera.component';
import { MosaicoComponent } from '../../../componentes/mosaico/mosaico.component';

@Component({
  selector: 'app-cuadro',
  standalone: true,
  imports: [CabeceraComponent, MosaicoComponent],
  templateUrl: './cuadro.component.html',
  styleUrl: './cuadro.component.css'
})
export class CuadroComponent {

}
