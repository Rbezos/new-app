import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnlacesMenuComponent } from '../enlaces-menu/enlaces-menu.component';

@Component({
  selector: 'app-cabecera',
  standalone: true,
  imports: [CommonModule, EnlacesMenuComponent],
  templateUrl: './cabecera.component.html',
  styleUrl: './cabecera.component.css'
})
export class CabeceraComponent {

}
