import * as formatHelper from "./../utils/formatHelpers"


// Отрисовать элемент, превью карточки объекта
export function renderCardBody(object) {
    let content = `
    <article class="col-md-4">
        <!-- card -->
        <a href="#/item/${object.id}" class="card" data-id="${object.id}">
            <div class="card__header">
                <div class="card__title">
                    ЖК ${object.complex_name}
                </div>
                <div class="card__like">
                </div>
            </div>
            <div class="card__img">
                <img src="${object.image}" alt="План квартиры" />
            </div>
            <div class="card__desc">
                <div class="card__price">
                    <div class="card__price-total">
                        ${formatHelper.toMoneyFormat(object.price_total)} ₽
                    </div>
                    <div class="card__price-per-meter">
                        ${formatHelper.toMoneyFormat(object.price_sq_m)} ₽/м2
                    </div>
                </div>

                <!-- card__params params -->
                <div class="card__params params">
                    <div class="params__item">
                        <div class="params__definition">
                            Комнат
                        </div>
                        <div class="params__value">${object.rooms}</div>
                    </div>
                    <div class="params__item">
                        <div class="params__definition">
                            Площадь
                        </div>
                        <div class="params__value">${object.square}</div>
                    </div>
                </div>
                <!-- //card__params params -->
            </div>
            <div class="card__footer">
                <div class="card__art">${object.scu}</div>
                <div class="card__floor">Этаж ${object.floor} из ${object.floors_total}</div>
            </div>
        </a>
        <!-- // card -->
    </article>
    `
    document.querySelector('#result-container').insertAdjacentHTML('beforeEnd', content);
}

// Отобразить иконку налчия объекта в избранном
export function renderCardFavoriteState(card_id, isFavourite) {
    const currentCard = document.querySelector('#app').querySelector(`[data-id="${card_id}"]`).querySelector('.card__like');
    
    currentCard.innerHTML = '<i class="fas fa-heart"></i>';
    isFavourite ? currentCard.classList.add('card__like--active') : currentCard.classList.remove('card__like--active');
}