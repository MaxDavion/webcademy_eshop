export default class SingleItem {

    constructor(id) {
        this.id = id
    }

    async getItem(id) {
        try { 
            const response = await fetch(`http://jsproject.webcademy.ru/items/${this.id}`);
            const data = await response.json();
            this.result = data;
        } catch(error) {
            alert(error);
        }
    }

    async submitForm(formData){
        try { 
            const response = await fetch(`http://jsproject.webcademy.ru/bidnew`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            this.response = data;
        } catch(error) {
            alert(error);
        }
    }
}