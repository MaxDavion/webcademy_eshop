import * as storage from "./../utils/storage"

export default class Favourites {

    constructor() {
        this.items = storage.get('favourites', [])
    }

    _add(id) {
        this.items.push(id);
    }

    _remove(id) {
        const index = this.items.indexOf(id);
        this.items.splice(index, 1);
    }

    isFavourites(id) {
        return this.items.indexOf(id) !== -1;
    }

    toggle(id) {
        this.isFavourites(id) ? this._remove(id) :  this._add(id);
        storage.set('favourites', this.items);

    }
}