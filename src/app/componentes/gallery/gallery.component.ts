import { Component, OnInit } from '@angular/core';
import { GalleryModule, GalleryItem, ImageItem } from 'ng-gallery'


@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [GalleryModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'  
})
export class GalleryComponent implements OnInit {
    public images: GalleryItem[] = [];

    ngOnInit() {
      // Set items array
      this.images = [
        new ImageItem(
            { src: 'https://levanova.es/wp-content/uploads/2023/05/Pan-rustico-de-Levanova-scaled.jpg', thumb: 'https://levanova.es/wp-content/uploads/2023/05/Pan-rustico-de-Levanova-scaled.jpg' }
        ),
        new ImageItem(
            { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Assorted_bread.jpg/640px-Assorted_bread.jpg', thumb: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Assorted_bread.jpg/640px-Assorted_bread.jpg' }
        ),
        // ... more items
      ];
    }

}
