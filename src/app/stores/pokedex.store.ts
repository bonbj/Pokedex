import { observable } from "mobx";
import { Pokemon } from "../models/pokemon.model";

export class Pokedex {
    @observable
    allPokemon : Pokemon[] = [];
}