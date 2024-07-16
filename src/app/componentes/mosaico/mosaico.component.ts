import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { ProductosService } from '../../servicios/produtos/productos.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mosaico',
  standalone: true,
  imports: [CardComponent, CommonModule],
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

  getDataFromApi():void {
    this.productosService.getData().subscribe((data) => {
      this.elementos = data.results;
    })
  }

}
