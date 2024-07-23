import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';
import { PaginacionComponent } from '../paginacion/paginacion.component';

@Component({
  selector: 'app-mosaico',
  standalone: true,
  imports: [CardComponent, CommonModule, PaginacionComponent],
  templateUrl: './mosaico.component.html',
  styleUrl: './mosaico.component.css'
})
export class MosaicoComponent implements OnChanges{

  @Input() array: any;

  public arrayPokemon: any[] = [];
  public numPokemon: number = 0;
  public elementos: any[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['array'] && this.array != undefined) {
      if (this.array) {
        this.elementos = this.array.results;
        this.numPokemon = this.array.count;
      } else {
        console.error('El array no está en el formato esperado:', this.array);
      }
    }
  }
}
