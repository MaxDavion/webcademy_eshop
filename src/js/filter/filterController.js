import 'url-search-params-polyfill'
import * as view from './filterView'
import Filter from './filterModel'

export default async function(state){    
    // Получаем и отрисовываем значения для фильтра с сервера
    if (!(state.filter)) state.filter = new Filter();
    await state.filter.getParams();
    view.render(state.filter.params);

    // Получаем и отрисовываем кол-во найденых по фильтру предложений
    await state.filter.getResults()
    state.results = state.filter.results
    view.changeResultButtonText(state.filter.results.length);

    const form = document.querySelector("#filter-form");
    // Обработка изменения пользователем фильтрации
    form.addEventListener('change', changeFilter.bind(null, state));

    // Обработка сброса пользователем фильтрации
    form.addEventListener('reset', resetFilter.bind(null, state));

    // Обработка отправки пользователем формы
    form.addEventListener('submit', submitFilter.bind(null, state));
}


async function changeFilter(state, e) {
    e.preventDefault();

    // Собираем параметры фильтрации, указанные пользователем
    const filterInputData = view.getFilterInput();

    // Запрашиваем сервер на получение данных по запросу
    const searchParams = new URLSearchParams();

    if (filterInputData.priceMin) {
        searchParams.append("pricemin", filterInputData.priceMin);
    }

    if (filterInputData.priceMax) {
        searchParams.append("pricemax", filterInputData.priceMax);
    }

    if (filterInputData.squareMin) {
        searchParams.append("sqmin", filterInputData.squareMin);
    }

    if (filterInputData.squareMax) {
        searchParams.append("sqmax", filterInputData.squareMax);
    }

    if (filterInputData.complexNames != "all") {
        searchParams.append("complex", filterInputData.complexNames);
    }

    if (filterInputData.roomValues.length != 0) {
        searchParams.append("rooms", filterInputData.roomValues.join(","));
    }

    state.filter.query = "?" + searchParams.toString();
    await state.filter.getResults();
    state.results = state.filter.results

    // Обновляем число найденных объектов на кнопке Показать
    view.changeResultButtonText(state.filter.results.length);
}

async function resetFilter(state, e) {
    // Запрашиваем сервер на получение всех данных
    state.filter.query = ""
    await state.filter.getResults();
    state.results = state.filter.results;

    // Обновляем число найденных объектов на кнопке Показать
    view.changeResultButtonText(state.filter.results.length);

    // Отправляем событие рендеринга результатов
    state.emitter.emit('event:render-listing', {});
}

function submitFilter(state, e) {
    e.preventDefault();
    state.emitter.emit('event:render-listing', {});

}