import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { GalleryModule, GalleryItem, ImageItem } from 'ng-gallery'



@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [GalleryModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'  
})
export class GalleryComponent implements OnChanges {

  @Input() arrayImages: any;

  constructor () {}

  public items: GalleryItem[] = [];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['arrayImages'] && this.arrayImages.length > 0) {
      this.items = [
        new ImageItem(
          { 
            src: this.arrayImages[0].front_default,
            thumb: this.arrayImages[0].front_default 
          }
        ),
        new ImageItem(
          { 
            src: this.arrayImages[0].back_default, 
            thumb: this.arrayImages[0].back_default 
          }
        ),
        new ImageItem(
          { 
            src: this.arrayImages[0].front_shiny, 
            thumb: this.arrayImages[0].front_shiny 
          }
        ),
        new ImageItem(
          { 
            src: this.arrayImages[0].back_shiny, 
            thumb: this.arrayImages[0].back_shiny 
          }
        )
      ];
    }
  }


}
