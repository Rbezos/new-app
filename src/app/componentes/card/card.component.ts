import { Component, Input, OnInit, Output } from '@angular/core';
import { ProductosService } from '../../servicios/produtos/productos.service';
import { CommonModule } from '@angular/common';
import { TypesComponent } from '../types/types.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, TypesComponent, RouterModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  
  @Input() elemento: any;
  @Output() tipos: any[] = [];
  @Output() arrayInfo: any[] = [];
  info: any;

  primaryColor: string = '';
  secondaryColor: string = '';
  isHovered: boolean = false;
  public id: number = 0;

  constructor(private productosService: ProductosService) { }

  ngOnInit() {
    if (this.elemento && this.elemento.url) {
      this.id = this.elemento.url.split('/')[6]
      this.getInfoProduct();
    } else {
      console.error('Elemento o elemento.url no está definido');
    }
  }

  getInfoProduct(): void {
    this.productosService.getProducts(this.elemento.url).subscribe(
      data => {
        this.info = data;
        this.arrayInfo = data;
        if(this.info.types.length >= 1) {
          this.primaryColor = this.productosService.getColorByType(this.info.types[0].type.name);
          this.tipos[0] = this.info.types[0].type;
          this.tipos[0]['color'] = this.primaryColor;
        } else {
          this.primaryColor = '#000000';
        }
        if (this.info.types.length >= 2) {
          this.secondaryColor = this.productosService.getColorByType(this.info.types[1].type.name);
          this.tipos[1] = this.info.types[1].type;
          this.tipos[1]['color'] = this.secondaryColor;
        } else {
          this.secondaryColor = this.primaryColor;
        }
      },
      error => {
        console.error('Error al obtener la información del producto:', error);
      }
    );
  }

  get gradientStyle(): string {
    return `linear-gradient(90deg, ${this.primaryColor} 0%, ${this.secondaryColor} 100%)`;
  }

  toggleHover(state:boolean) {
    this.isHovered = state;
  }


}