import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, Output } from '@angular/core';
import { ProductosService } from '../../servicios/produtos/productos.service';
import { TypesComponent } from '../types/types.component';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import { faMap } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [CommonModule, TypesComponent, FontAwesomeModule],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent implements OnInit {
 
  @Input() elemento: any;
  @Output() tipos: any[] = [];
  info: any;
  faCoffee = faMap;

  public safeImageUrl: SafeUrl = "";
  
  primaryColor: string = '';
  secondaryColor: string = '';
  isHovered: boolean = false;
  constructor(private productosService: ProductosService, private sanitizer: DomSanitizer) { }

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
        const url = this.info.sprites.versions['generation-viii'].icons.front_default;
        this.safeImageUrl = this.sanitizer.bypassSecurityTrustUrl(url);
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
}
