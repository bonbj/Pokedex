import { Injectable } from "@angular/core";
import { observable } from "mobx";
import { Pokemon } from "../models/pokemon.model";


@Injectable()
export class Pokedex {
    @observable
    public allPokemon : Pokemon[] = [];
    @observable
    public showListPokemon: Pokemon[] = [];
    @observable
    public hideListPokemon: Pokemon[] = [];
    @observable
    public filteredPokemon: Pokemon[] = [];
}