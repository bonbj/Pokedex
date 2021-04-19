import { observable } from "mobx";

export class PageStore {
    @observable
    isSideMenuOpen: boolean = false;
    @observable
    isFilterMenuOpen: boolean = false;
    @observable
    isSearchBarShow: boolean = false;
    @observable
    searchPokemonText: string = "";
    @observable
    pokemonDetailedId: number = 0;
    @observable
    pageActive: string;
}