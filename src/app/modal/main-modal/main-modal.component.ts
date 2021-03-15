import { Component } from '@angular/core';
import { Pokedex } from 'src/app/stores/pokedex.store';

@Component({
  selector: 'app-main-modal',
  templateUrl: './main-modal.component.html',
  styleUrls: ['./main-modal.component.scss'],
})
export class MainModalComponent {

  constructor(
    public pokedexStore: Pokedex
  ) { }

}
