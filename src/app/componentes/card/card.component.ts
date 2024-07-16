import { Component, Input, OnInit } from '@angular/core';
import { ProductosService } from '../../servicios/produtos/productos.service';
import { CommonModule } from '@angular/common';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  animations: [
    trigger('flipState', [
      state('active', style({
        transform: 'rotateY(179deg)'
      })),
      state('inactive', style({
        transform: 'rotateY(0)'
      })),
      transition('active => inactive', animate('500ms ease-out')),
      transition('inactive => active', animate('500ms ease-in'))
    ])
  ]
})
export class CardComponent implements OnInit {

  @Input() elemento: any;
  info: any;

  tipos: string[] = [];
  primaryColor: string = '';
  secondaryColor: string = '';
  constructor(private productosService: ProductosService) { }

  ngOnInit() {
    if (this.elemento && this.elemento.url) {
      this.getInfoProduct();
    } else {
      console.error('Elemento o elemento.url no está definido');
    }
  }

  getInfoProduct(): void {
    this.productosService.getProducts(this.elemento.url).subscribe(
      data => {
        this.info = data;
        if(this.info.types.length >= 1) {
          this.primaryColor = this.productosService.getColorByType(this.info.types[0].type.name);
        } else {
          this.primaryColor = '#000000';
        }
        if (this.info.types.length >= 2) {
          this.secondaryColor = this.productosService.getColorByType(this.info.types[1].type.name);
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

  flip: string = 'inactive';

  toggleFlip() {
    this.flip = (this.flip == 'inactive') ? 'active' : 'inactive';
  }

}