import { Component, OnInit, Input, ElementRef, ViewChild, OnChanges, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsService } from '../../servicios/cartas/cartas.service';
import KeenSlider, { KeenSliderInstance } from 'keen-slider';
import { Observable, catchError, of } from 'rxjs';

@Component({
  selector: 'app-slider-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slider-cards.component.html',
  styleUrls: [
    './slider-cards.component.css',
    '/node_modules/keen-slider/keen-slider.min.css',
  ],
})
export class SliderCardsComponent implements OnChanges {

  constructor(private cardsService: CardsService, private cdr: ChangeDetectorRef) {}

  @Input() pokemonInfo: any[] = [];
  
  public arrayCards: any[] = [];
  public isLoading = true;
  public error: string | null = null;

  @ViewChild('sliderRef', { static: false }) sliderRef!: ElementRef<HTMLElement>;
  
  private slider!: KeenSliderInstance;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['pokemonInfo'] && this.pokemonInfo[0].name != ""){
      this.loadCards();
    }
  }

  private loadCards(): void {
    this.cardsService.getImagesCards(this.pokemonInfo[0].name).pipe(
      catchError(err => {
        console.error('Error fetching card images:', err);
        this.error = 'Failed to load card images.';
        return of([]); // Return an empty array on error
      })
    ).subscribe(data => {
      this.arrayCards = data;
      this.isLoading = false;
      this.cdr.detectChanges(); // Force Angular to update the view
      this.initializeSlider(); // Initialize the slider after the view has been updated
    });
  }

  get gradientStyle(): string {
    return `linear-gradient(90deg, ${this.pokemonInfo[1].primary} 0%, ${this.pokemonInfo[2].secondary} 100%)`;
  }

  private initializeSlider(): void {
    if (this.sliderRef && !this.slider) {
      this.slider = new KeenSlider(this.sliderRef.nativeElement, {
        loop: true,
        mode: 'free',
        slides: {
          perView: 7,
          spacing: 15,
        },
      });
    }
  }

  ngOnDestroy(): void {
    if (this.slider) this.slider.destroy();
  }
}