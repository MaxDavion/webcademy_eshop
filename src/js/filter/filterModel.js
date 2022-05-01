export default class Filter {

    constructor() {
        this.query = ""
    }

    async getParams() {
        try {
            const response = await fetch('http://jsproject.webcademy.ru/itemsinfo');
            const data = await response.json();
            this.params = data;
        } catch(error) {
            alert(error);
        }
    }

    async getResults() {
        try { 
            const response = await fetch(`http://jsproject.webcademy.ru/items${this.query}`);
            const data = await response.json();
            this.results = data;
        } catch(error) {
            alert(error);
        }
    }
}