import { Pokemon } from './../../models/pokemon.model';
import { Pokedex } from './../../stores/pokedex.store';
import { TYPEENUM } from './../../enum/types-svg.enum';
import { Component } from '@angular/core';
import { PageStore } from 'src/app/stores/pages.store';

@Component({
  selector: 'app-filter-menu',
  templateUrl: './filter-menu.component.html',
  styleUrls: ['./filter-menu.component.scss'],
})
export class FilterMenuComponent {
  public TYPEENUM: TYPEENUM = new TYPEENUM();
  public mainFilter:string = "";
  public generationFilter: number = 0;
  public filterTypeOpen: boolean = false;
  public filterGenerationOpen: boolean = false;

  constructor(
    public pageStore: PageStore,
    private pokedex: Pokedex
  ) { }

    public filterPokemon(): void {
      this.generationFilter = 0;

      this.pokedex.filteredPokemon = this.pokedex.allPokemon.filter((pokemon:Pokemon) => pokemon.type.includes(this.typeName(this.mainFilter)));
      this.closeFilter();
    }

    public typeName(type:string):string {
      return this.TYPEENUM.TYPENAME.find((typeName:string) => {
        if(type.includes(typeName)){
          return typeName;
        }
      });
    }

    public clearFilter():void {
      this.mainFilter = "";
      this.pokedex.filteredPokemon = [];
      this.closeFilter();
    }

    public closeFilter(): void {
      this.pageStore.isFilterMenuOpen = false;
    }

    public changeTypeFilter(): void {
      this.filterTypeOpen = !this.filterTypeOpen;
    }

    public changeGenerationFilter(): void {
      this.filterGenerationOpen = !this.filterGenerationOpen
    }
    public filterPokemonByGeneration():void {
      this.mainFilter = "";
      this.pokedex.filteredPokemon = this.pokedex.allPokemon.filter((pokemon:Pokemon) => pokemon.generation == this.generationFilter);
      this.closeFilter();
    }
}
