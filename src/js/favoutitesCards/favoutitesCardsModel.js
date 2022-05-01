export default class FavouritesCards {

    constructor(listFavourites){
        this.items = listFavourites
        this.result = []
    }

    async get() {
        try {
            const response = await fetch(`http://jsproject.webcademy.ru/items?ids=${this.items.toString()}`);
            const data = await response.json();
            this.result = data;
        } catch(error) {
            alert(error);
        }
    }
}