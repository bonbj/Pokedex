export class Pokemon {
    id: number = 0;
    height: number = 0;
    weight: number = 0;
    type: string[] = [];
    sprite : string = "";
    generation:  number = 0;
    name: string = "";
    stats = {
        "hp": 0,
        "attack" : 0,
        "defense" : 0,
        "special-attack": 0,
        "special-defense": 0,
        "speed": 0
    };
    isFavorite: boolean = false;
    color = {
        r : 0,
        g : 0,
        b : 0
    }
}