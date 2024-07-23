import { Component, OnInit } from '@angular/core';
import { CabeceraComponent } from '../../../componentes/cabecera/cabecera.component';
import { MosaicoComponent } from '../../../componentes/mosaico/mosaico.component';
import { ProductosService } from '../../../servicios/produtos/productos.service';
import { PaginacionComponent } from '../../../componentes/paginacion/paginacion.component';

@Component({
  selector: 'app-cuadro',
  standalone: true,
  imports: [CabeceraComponent, MosaicoComponent, PaginacionComponent],
  templateUrl: './cuadro.component.html',
  styleUrl: './cuadro.component.css'
})
export class CuadroComponent implements OnInit {

  public data: any;

  constructor(private productosService: ProductosService){}

  ngOnInit(): void {
    this.getDataFromApi();
  }

  getDataFromApi(page: number = 1, limit: number = 12):void {
    this.productosService.getData((page - 1) * limit, limit).subscribe((data) => {
      this.data = data;
    })
  }

}
