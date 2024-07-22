import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
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

  @Input() array: any[] = [];

  public arrayPokemon: any[] = [];
  public numPokemon: number = 0;
  public elementos: any[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['array']) {
      if (this.array) {
        console.log('Datos recibidos en el componente hijo:', this.array);
      } else {
        console.error('El array no está en el formato esperado:', this.array);
      }
    }
  }

  onPageChanged(event: {page: number, limit: number}) {
    // this.getDataFromApi(event.page, event.limit);
  }
}
