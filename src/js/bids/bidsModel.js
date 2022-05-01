export default class Bids {

    async getBids() {
        try {
            const response = await fetch('http://jsproject.webcademy.ru/bids');
            const data = await response.json();
            this.result = data;
        } catch(error) {
            alert(error);
        }
    }
}