import * as formatHelper from "../utils/formatHelpers"

export function render(object) {
    let content = `
    <div class="container p-0 pt-5">
        <div class="heading-1">
            ${object.title}, ${object.square} м2 за ${formatHelper.toMoneyFormat(object.price_total)} ₽
        </div>

        <!-- object -->
        <div class="object">
            <!-- object__photo -->
            <div class="object__photo">
                <div class="object__photo-wrapper">
                    <img src="${object.image}" alt="" />
                </div>
            </div>
            <!-- // object__photo -->

            <!-- object__desc -->
            <div class="object__desc">
                <div class="object__desc-sector">
                    ЖК ${object.complex_name}
                </div>

                <div class="object__desc-name">
                    <div class="object__desc-title">
                        ${object.title}, ${object.square} м2
                    </div>
                    <div class="object__desc-art">${object.scu}</div>
                    <div id="favourite-container">
                        <!-- Favourite button here -->
                    </div>

                </div>

                <div class="object__desc-details">
                    <!-- params -->
                    <div class="params">
                        <div class="params__item">
                            <div class="params__definition">Корпус</div>
                            <div class="params__value">${object.building}</div>
                        </div>
                        <div class="params__item">
                            <div class="params__definition">Этаж</div>
                            <div class="params__value">${object.floor}</div>
                        </div>
                        <div class="params__item">
                            <div class="params__definition">Номер</div>
                            <div class="params__value">${object.flat_number}</div>
                        </div>
                        <div class="params__item">
                            <div class="params__definition">Комнат</div>
                            <div class="params__value">${object.rooms}</div>
                        </div>
                    </div>
                    <!-- // params -->
                </div>

                <div class="details">
                    <div class="details__row">
                        <div class="details__name">Стоимость</div>
                        <div class="details__value details__value--price">
                            ${formatHelper.toMoneyFormat(object.price_total)} ₽
                        </div>
                    </div>
                    <div class="details__row">
                        <div class="details__name">Цена за м2</div>
                        <div class="details__value">${formatHelper.toMoneyFormat(object.price_sq_m)} ₽/м2</div>
                    </div>
                    <div class="details__row">
                        <div class="details__name">Площадь</div>
                        <div class="details__value">${object.square} м2</div>
                    </div>
                </div>

                <button class="button-order">Забронировать</button>
                <!-- <button class="button-preview">Записаться на просмотр</button> -->
            </div>
            <!-- // object__desc -->
        </div>
        <!-- // object -->
    </div>
    
    <div class="container p-0">
        <a href="/#" class="back-to-results">← Вернуться к результатам поиска</a>
    </div>
    `

    const contentModal = `
        <div class="modal-wrapper none">
            <div class="modal">
                <div class="modal__header">
                    <div class="modal__title">
                        Заявка на бронирование
                    </div>
                    <div class="modal__details">
                        Квартира <span>96</span> в Первом квартале Дом 5
                        <div class="modal__details-art">ГЕН-112-42</div>
                    </div>
                </div>

                <form class="modal__form">
                    <div class="modal__form-content">
                        <!-- formgroup -->
                        <div class="formgroup">
                            <label
                                class="modal__form-input-label"
                                for="form-phone"
                            >
                                Имя
                            </label>
                            <input
                                type="text"
                                id="form-name"
                                class="modal__form-input"
                                placeholder="Введите имя"
                            />
                        </div>
                        <!-- // formgroup -->
                        <!-- formgroup -->
                        <div class="formgroup">
                            <label
                                class="modal__form-input-label"
                                for="form-phone"
                            >
                                Телефон
                            </label>
                            <input
                                type="text"
                                id="form-phone"
                                class="modal__form-input"
                                placeholder="+7 (XXX) XXX-XX-XX"
                            />
                        </div>
                        <!-- // formgroup -->

                        <div class="formgroup formgroup--checkbox">
                            <input type="checkbox" id="policy"/>
                            <label class="policy-text" for="policy"
                                >Я согласен на обработку моих персональных
                                данных. С Политикой в отношении обработки
                                персональных данных ознакомлен и
                                согласен.</label
                            >
                        </div>
                    </div>
                    <input
                        class="modal__submit"
                        type="submit"
                        value="Отправить заявку"
                        disabled
                    />
                </form>
                <button class="modal__close">
                    Закрыть
                </button>
            </div>
        </div>`;

    document.querySelector("#app").insertAdjacentHTML("beforeEnd", content);
    document.querySelector("#app").insertAdjacentHTML("beforeEnd", contentModal);
}

export function showModal() {
    document.querySelector('.modal-wrapper').classList.remove('none');
}

export function hideModal() {
    document.querySelector('.modal-wrapper').classList.add('none');
}

export function getFormInput() {
    const modalForm = document.querySelector('.modal__form');
    return {
        "name": modalForm.querySelector('#form-name').value,
        "phone": modalForm.querySelector('#form-phone').value
    }
}

export function clearModalForm() {
    document.querySelector('.modal__form').reset();
}

export function renderFavoriteButton(isFavourite) {
    const content = `
    <button class="button-favourite ${isFavourite ? 'button-favourite--active' : ''}">
        <i class="fas fa-heart"></i> <span>${isFavourite ? 'В избранном' : 'В избранное'}</span>
    </button>`

    document.querySelector("#app").querySelector("#favourite-container").innerHTML = content;
}