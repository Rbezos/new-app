import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../../servicios/produtos/productos.service';
import { CabeceraComponent } from '../../../componentes/cabecera/cabecera.component';
import { GalleryComponent } from '../../../componentes/gallery/gallery.component';
import { SliderCardsComponent } from '../../../componentes/slider-cards/slider-cards.component';
import { CardsService } from '../../../servicios/cartas/cartas.service';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [CabeceraComponent, GalleryComponent, SliderCardsComponent],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent implements OnInit {

  constructor( 
    private activatedRoute: ActivatedRoute, 
    private productosService: ProductosService,
    private cardsService: CardsService
  ) {}

  @Output() tipos: any[] = [];
  @Output() arrayImages: any[] = [];
  @Output() arrayCards: any[] = [];

  private namePokemon: string = '';
  private url_info:string = "https://pokeapi.co/api/v2/pokemon/";
  private id:number = 0;
  info: any;
  primaryColor: string = '';
  secondaryColor: string = '';
  
  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe( params => {
        this.id = params['id'];
        this.getInfoProduct();
      })
  }

  getInfoProduct(): void {
    this.productosService.getProducts(this.url_info+this.id).subscribe(
      data => {
        this.info = data;
        this.arrayImages = data.sprites;
        this.namePokemon = data.name;
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
  getInfoCards(): void {
    this.cardsService.getProducts(this.namePokemon).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.error('Error al obtener la información del producto:', error);
      }
    );
  }

}
