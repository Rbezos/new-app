import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import { faMap } from '@fortawesome/free-solid-svg-icons';
import { faBarChart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-boton-group',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './boton-group.component.html',
  styleUrl: './boton-group.component.css'
})
export class BotonGroupComponent {
  public array_icons = [
    {
      name: faMap,
      color:'#5785eb',
      isHovered: false
    },
    {
      name: faInfo,
      color: '#eda92c',
      isHovered: false
    },
    {
      name: faBarChart,
      color: '#fb5b5b',
      isHovered: false
    }
  ];

  isHovered: boolean = false;

  botonHover(icon: any, state: boolean) {
    icon.isHovered = state;
  }

}
