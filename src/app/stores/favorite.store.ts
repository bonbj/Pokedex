export class FavoriteStore {

    public saveFavorite(isFavorite:boolean,pokemonId:number):void {
        let store: number[] = [];

        if(isFavorite){
        if(localStorage.getItem("favorite-pokemons")){
            store = JSON.parse(localStorage.getItem("favorite-pokemons"));
            store.push(pokemonId);
        }else {
            store = [pokemonId];
        }
        }else {
        store= JSON.parse(localStorage.getItem("favorite-pokemons"));
        store = store.filter(pokemon => pokemon !== pokemonId);
        }

        localStorage.setItem("favorite-pokemons",JSON.stringify(store));
    }

    public isFavorite(pokemonId:number):boolean {
        if(localStorage.getItem("favorite-pokemons")){
            let store: number[] = [];
            store = JSON.parse(localStorage.getItem("favorite-pokemons"));
            if(store.includes(pokemonId)){
                return true;
            }else {
                return false;
            }
        }else {
            return false;
        }
    }
}