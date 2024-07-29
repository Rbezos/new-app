import { Component, EventEmitter, Output, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataSharingService } from '../../servicios/data-sharing/data-sharing.service';

@Component({
  selector: 'app-paginacion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './paginacion.component.html',
  styleUrl: './paginacion.component.css'
})
export class PaginacionComponent implements OnInit {

  contador_paginas: number = 0;
  num_elementos: number = 12;
  num_paginas: number = 0;
  paginas: number[] = [];
  pagina_actual: number = 1;

  @Input() numPokemon: any;
  @Output() vista = new EventEmitter<number>();

  constructor(private dataSharingService: DataSharingService) { }

  ngOnInit(): void {
    this.num_paginas = Math.ceil(1302 / this.num_elementos);
    this.generatePaginacion();
  }

  generatePaginacion(): void {
    this.paginas = [];
    
    this.pagina_actual = Math.max(1, Math.min(this.pagina_actual, this.num_paginas));

    let inicio = Math.max(1, this.pagina_actual - 2);
    let fin = Math.min(this.num_paginas, this.pagina_actual + 2);

    if (this.pagina_actual - 2 < 1) {
      fin = Math.min(this.num_paginas, fin + (1 - (this.pagina_actual - 2)));
    }

    if (this.pagina_actual + 2 > this.num_paginas) {
      inicio = Math.max(1, inicio - ((this.pagina_actual + 2) - this.num_paginas));
    }

    for (let i = inicio; i <= fin; i++) {
      this.paginas.push(i);
    }
  }
  cambiarPagina(pagina: number): void {
    this.pagina_actual = pagina;
    this.dataSharingService.changeData([this.pagina_actual, this.num_elementos]);
    this.generatePaginacion();
  }

  cambiarVista(vista:number) {
    this.vista.emit(vista);
  }
}
