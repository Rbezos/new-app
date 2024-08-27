import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { GalleryModule, GalleryItem, ImageItem } from 'ng-gallery'



@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [GalleryModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'  
})
export class GalleryComponent implements OnInit {

  @Input() arrayImages: any;

  constructor () {}

  public items: GalleryItem[] = [];

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(this.arrayImages);
    if (changes['arrayImages'] && this.arrayImages.length > 0) {
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
            src: this.arrayImages[0].back_shiny, 
            thumb: this.arrayImages[0].back_shiny 
          }
        )
      ];
    }
  }


}
