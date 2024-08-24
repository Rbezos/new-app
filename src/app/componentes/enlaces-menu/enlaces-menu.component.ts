import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule} from '@angular/router';


@Component({
  selector: 'app-enlaces-menu',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './enlaces-menu.component.html',
  styleUrl: './enlaces-menu.component.css'
})
export class EnlacesMenuComponent implements OnInit{

  currentRoute: string = '';

  public enlaces = [
    {name: 'Pokedex', route: '/cuadro'}
  ]
  constructor(private router: Router){}

  ngOnInit(): void { 
    this.currentRoute = this.router.url;
  }
}
