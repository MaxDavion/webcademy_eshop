import * as view from "./listingView"
import * as cardItemView from "../cardItem/cardItemView"


export default function(state) {
    // Отрисовываем список объектов при загрузке страницы
    view.renderResultContainer();
    renderListinCards(state);

    // Отрисовываем список объектов при применении фильтра
    state.emitter.subscribe('event:render-listing', function() {
        view.clearCardsList();
        renderListinCards(state);
    })

    function renderListinCards() {
        // Отображаем сами карточки
        state.results.forEach(element => {
            cardItemView.renderCardBody(element);
            cardItemView.renderCardFavoriteState(element.id, state.favourites.isFavourites(element.id));
        });

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



