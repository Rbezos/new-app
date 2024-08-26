import { Component, OnInit } from '@angular/core';
import { CabeceraComponent } from '../../../componentes/cabecera/cabecera.component';
import { MosaicoComponent } from '../../../componentes/mosaico/mosaico.component';
import { ProductosService } from '../../../servicios/produtos/productos.service';
import { PaginacionComponent } from '../../../componentes/paginacion/paginacion.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cuadro',
  standalone: true,
  imports: [CabeceraComponent, MosaicoComponent, PaginacionComponent],
  templateUrl: './cuadro.component.html',
  styleUrl: './cuadro.component.css'
})
export class CuadroComponent implements OnInit {

  constructor(
    private productosService: ProductosService, 
    private activatedRoute: ActivatedRoute
  ){}

  public data: any;
  public paginaActual: number = 1;
  public limiteElementos: number = 12;

  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe ( params => {
        this.paginaActual = params['page'];
        this.getDataFromApi(this.paginaActual, this.limiteElementos);
      })
  }

  getDataFromApi(page: number = 1, limit: number = 12):void {
    this.productosService.getData((page - 1) * limit, limit).subscribe((data) => {
      this.data = data;
    })
  }

}
