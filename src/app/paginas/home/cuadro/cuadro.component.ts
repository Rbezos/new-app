import { Component, OnInit } from '@angular/core';
import { CabeceraComponent } from '../../../componentes/cabecera/cabecera.component';
import { MosaicoComponent } from '../../../componentes/mosaico/mosaico.component';
import { ProductosService } from '../../../servicios/produtos/productos.service';
import { PaginacionComponent } from '../../../componentes/paginacion/paginacion.component';
import { DataSharingService } from '../../../servicios/data-sharing/data-sharing.service';

@Component({
  selector: 'app-cuadro',
  standalone: true,
  imports: [CabeceraComponent, MosaicoComponent, PaginacionComponent],
  templateUrl: './cuadro.component.html',
  styleUrl: './cuadro.component.css'
})
export class CuadroComponent implements OnInit {

  public data: any;
  private arrayPaginas: any[] = [];
  constructor(private productosService: ProductosService, private dataSharingService: DataSharingService){}

  ngOnInit(): void {
    this.dataSharingService.currentData.subscribe((data) => {
      this.arrayPaginas = data;
      this.getDataFromApi(this.arrayPaginas[0], this.arrayPaginas[1]);
    })
  }

  getDataFromApi(page: number = 1, limit: number = 12):void {
    this.productosService.getData((page - 1) * limit, limit).subscribe((data) => {
      this.data = data;
      console.log(this.data);
    })
  }

}
