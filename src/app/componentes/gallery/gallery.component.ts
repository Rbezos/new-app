import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { GalleryModule, GalleryItem, ImageItem } from 'ng-gallery'
import { CardsService } from '../../servicios/cartas/cartas.service';


@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [GalleryModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'  
})
export class GalleryComponent implements OnInit {

  @Input() arrayImages: any;

  constructor (private cardService: CardsService) {}

  public items: GalleryItem[] = [];

  ngOnInit(): void {
    this.cardService.getProducts("squirtle").subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.error('Error al obtener la información del producto:', error);
      }
    );
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['arrayImages']) {
      this.items = [
        new ImageItem(
          { 
            src: this.arrayImages.front_default,
            thumb: this.arrayImages.front_default 
          }
        ),
        new ImageItem(
          { 
            src: this.arrayImages.back_default, 
            thumb: this.arrayImages.back_default 
          }
        ),
        new ImageItem(
          { 
            src: this.arrayImages.front_shiny, 
            thumb: this.arrayImages.front_shiny 
          }
        ),
        new ImageItem(
          { 
            src: this.arrayImages.back_shiny, 
            thumb: this.arrayImages.back_shiny 
          }
        ),
        // ... more items
      ];
    }
  }


}
