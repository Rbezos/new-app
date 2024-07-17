import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ProductosService } from '../../servicios/produtos/productos.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-paginacion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './paginacion.component.html',
  styleUrl: './paginacion.component.css'
})
export class PaginacionComponent implements OnInit {

  constructor(private productosService: ProductosService){}
  contador_paginas: number = 0;
  num_elementos: number = 12;
  num_paginas: number = 0;
  paginas: number[] = [];
  pagina_actual: number = 1;

  @Output() pageChanged = new EventEmitter<{page: number, limit: number}>();

  ngOnInit(): void {
    this.getDataFromApi();
  }

  getDataFromApi(): void {
    this.productosService.getData(this.num_elementos*this.pagina_actual,this.num_elementos).subscribe((data) => {
      this.num_paginas = Math.ceil(data.count / this.num_elementos);
      this.generatePaginacion();
    })
  }

  generatePaginacion(): void {
    this.paginas = [];
    // Asegurarnos de que pagina_actual no sea menor que 1 ni mayor que total_paginas
    this.pagina_actual = Math.max(1, Math.min(this.pagina_actual, this.num_paginas));

    // Definimos los límites iniciales de la paginación
    let inicio = Math.max(1, this.pagina_actual - 2);
    let fin = Math.min(this.num_paginas, this.pagina_actual + 2);

    // Ajustamos los límites si no hay suficientes páginas antes de la página actual
    if (this.pagina_actual - 2 < 1) {
      fin = Math.min(this.num_paginas, fin + (1 - (this.pagina_actual - 2)));
    }

    // Ajustamos los límites si no hay suficientes páginas después de la página actual
    if (this.pagina_actual + 2 > this.num_paginas) {
      inicio = Math.max(1, inicio - ((this.pagina_actual + 2) - this.num_paginas));
    }

    // Rellenamos el array de páginas
    for (let i = inicio; i <= fin; i++) {
      this.paginas.push(i);
    }
  }
  cambiarPagina(pagina: number): void {
    this.pagina_actual = pagina;
    this.getDataFromApi();
    this.pageChanged.emit({page: this.pagina_actual, limit: this.num_elementos});
  }
}
