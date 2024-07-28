import { Component, Input, OnInit, Output } from '@angular/core';
import { ProductosService } from '../../servicios/produtos/productos.service';
import { CommonModule } from '@angular/common';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { TypesComponent } from '../types/types.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, TypesComponent],
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
  @Output() tipos: any[] = [];
  info: any;

  primaryColor: string = '';
  secondaryColor: string = '';
  isHovered: boolean = false;

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