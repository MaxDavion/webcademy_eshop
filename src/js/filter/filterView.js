import * as formatHelper from "./../utils/formatHelpers"

export function render(params) {

    let complexNames = "";
    params.complexNames.forEach((item) => {
        complexNames += `<option value="${item}">ЖК ${item}</option>`;
    });

    let roomValues = "";
    params.roomValues.forEach((item) => {
        roomValues += `<input
                            name="rooms"
                            type="checkbox"
                            id="rooms_${item}"
                            class="rooms__checkbox"
                            value="${item}"
                        /><label for="rooms_${item}" class="rooms__btn">${item}</label>`
    });



    const content = `
    <!-- Filter -->
    <form id="filter-form" method="GET" class="container p-0">
        <div class="heading-1">Выбор квартир:</div>
        <div class="filter">
            <div class="filter__col">
                <div class="filter__label">Выбор проекта:</div>
                <select name="complex" id="" class="filter__dropdown">
                    <option value="all">Все проекты</option>
                    ${complexNames}
                </select>
            </div>
            <div class="filter__col rooms">
                <div class="filter__label">Комнат:</div>
                <div class="rooms__wrapper">
                    ${roomValues}
                </div>
            </div>
            <div class="filter__col">
                <div class="filter__label">Площадь:</div>
                <div class="range__wrapper">
                    <label class="range">
                        <div for="" class="range__label">от</div>
                        <input
                            name="sqmin"
                            min="0"
                            type="number"
                            class="range__input"
                            placeholder="${params.squareMin}"
                        />
                        <div class="range__value">м2</div>
                    </label>
                    <label class="range">
                        <div for="" class="range__label">до</div>
                        <input
                            name="sqmax"
                            min="0"
                            type="number"
                            class="range__input"
                            placeholder="${params.squareMax}"
                        />
                        <div class="range__value">м2</div>
                    </label>
                </div>
            </div>
            <div class="filter__col">
                <div class="filter__label">Стоимость:</div>
                <div class="range__wrapper">
                    <div class="range">
                        <label for="" class="range__label">от</label>
                        <input
                            type="number"
                            name="pricemin"
                            min="0"
                            class="range__input range__input--price"
                            placeholder="${formatHelper.toMoneyFormat(params.priceMin)}"
                        />
                        <div class="range__value">₽</div>
                    </div>
                    <div class="range">
                        <label for="" class="range__label">до</label>
                        <input
                            type="number"
                            name="pricemax"
                            min="0"
                            class="range__input range__input--price"
                            placeholder="${formatHelper.toMoneyFormat(params.priceMax)}"
                        />
                        <div class="range__value">₽</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="filter__buttons">
            <button class="filter__show">Показать объекты</button>
            <button type="reset" class="filter__reset">Сбросить фильтр</button>
        </div>
    </form>
    <!-- // Filter -->
    `
    document.querySelector('#app').insertAdjacentHTML('afterbegin', content);
}

export function changeResultButtonText(count) {
    const btn = document.querySelector('.filter__show')

    btn.innerHTML = count === 0 ? `Объекты не найдены. Измените условия поиска` : `Показать ${count} объектов`;
    btn.disabled = count === 0;
}

export function getFilterInput() {
    const priceMin = document.querySelector('[name="pricemin"]').value;
    const priceMax = document.querySelector('[name="pricemax"]').value;
    const squareMin = document.querySelector('[name="sqmin"]').value;
    const squareMax = document.querySelector('[name="sqmax"]').value
    const roomValues = document.querySelectorAll('.rooms__checkbox')
    const complexNames = document.querySelector('.filter__dropdown').value

    const roomCheckedValues = [];
    roomValues.forEach((item) => {
        if (item.checked) {
            roomCheckedValues.push(item.value)
        }
    });

    return {
        "priceMin": priceMin,
        "priceMax": priceMax,
        "squareMin": squareMin,
        "squareMax": squareMax,
        "complexNames": complexNames,
        "roomValues": roomCheckedValues
    };
}