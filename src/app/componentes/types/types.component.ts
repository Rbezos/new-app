import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-types',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './types.component.html',
  styleUrl: './types.component.css'
})
export class TypesComponent  {

  @Input() tipos: any[] = [];

}
