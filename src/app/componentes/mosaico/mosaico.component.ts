import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { ProductosService } from '../../servicios/produtos/productos.service';
import { CommonModule } from '@angular/common';
import { PaginacionComponent } from '../paginacion/paginacion.component';

@Component({
  selector: 'app-mosaico',
  standalone: true,
  imports: [CardComponent, CommonModule, PaginacionComponent],
  templateUrl: './mosaico.component.html',
  styleUrl: './mosaico.component.css'
})
export class MosaicoComponent implements OnInit {

  elementos: any[] = [];
  ejemplo: any;
  constructor(private productosService: ProductosService){}

  ngOnInit(): void {
    this.getDataFromApi();
  }

  onPageChanged(event: {page: number, limit: number}) {
    console.log(event);
    this.getDataFromApi(event.page, event.limit);
  }

  getDataFromApi(page: number = 1, limit: number = 12):void {
    console.log(page);
    this.productosService.getData((page - 1) * limit, limit).subscribe((data) => {
      this.elementos = data.results;
    })
  }

}
