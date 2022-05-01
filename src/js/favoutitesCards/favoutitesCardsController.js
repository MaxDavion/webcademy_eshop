import * as view from "./favoutitesCardsView"
import FavouritesCards from "./favoutitesCardsModel";
import * as cardItemView from "../cardItem/cardItemView"

export default async function(state) {
    // Получаем избранное
    const favouritesCards = new FavouritesCards(state.favourites.items)
    if (state.favourites.items.length > 0) await favouritesCards.get()
    
    // Отрисовываем список объектов в избранном
    view.renderFavouritesContainer();
    renderListinCards(state);

    function renderListinCards() {
        // Отображаем сами карточки
        favouritesCards.result.forEach(element => {
            cardItemView.renderCardBody(element);
            cardItemView.renderCardFavoriteState(element.id, state.favourites.isFavourites(element.id));
        });

        // Если избранное пустое, то отображаем сообщение об этом
        if (favouritesCards.result.length == 0) {
            view.showEmptyFavouritesContainer()
        }





        // Добавляем отслеживание взаимодействия с избранным
        addToFavouriteListener();
    }

    // Отслеживаем добавление в избранное / удаление из избранного
    function addToFavouriteListener() {
        document.querySelectorAll('.card__like').forEach( (item) => {
            item.addEventListener('click', (e) => {
                e.preventDefault()

                const currentId = e.target.closest('.card').dataset.id;
                state.favourites.toggle(currentId);
                cardItemView.renderCardFavoriteState(currentId, state.favourites.isFavourites(currentId));
            })
        })
    }
}