import favouritesCards from "./../favoutitesCards/favoutitesCardsController";

export default function (state) {
	document.querySelector('#app').innerHTML = ``;
	favouritesCards(state)
	
}
