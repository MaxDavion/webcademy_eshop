import * as view from "./singleItemView";
import SingleItem from "./singleItemModel";

export default async function(state) {

    /*
     *  Страница объекта
     */

    // Получаем с сервера данные об объекте
    state.singleItem = new SingleItem(state.routeParams);
    await state.singleItem.getItem();
    
    // Отрисовываем его на странице
    view.render(state.singleItem.result);
    view.renderFavoriteButton(state.favourites.isFavourites(state.singleItem.id));

    /*
     *  Форма подачи заявки
     */

    // Открытие формы
    document.querySelector('.button-order').addEventListener('click', function(e){
        view.showModal();
    })

    // Закрытие формы по кнопке
    document.querySelector('.modal__close').addEventListener('click', function(e){
        view.hideModal();
    })

    // Закрытие формы при клике вне области формы
    document.querySelector('.modal-wrapper').addEventListener('click', function(e){
        if (!(e.target.closest('.modal'))) {
            view.hideModal();
        }
    })

    // Отправка формы и создание заявки на сервере
    document.querySelector('.modal__form').addEventListener('submit', async function(e){
        e.preventDefault();

        const formData = view.getFormInput();
        await state.singleItem.submitForm(formData);

        const response = state.singleItem.response;
        if (response.message === "Bid Created") {
            alert("Спасибо. Ваша заявка принята!");
            view.hideModal();
            view.clearModalForm();
        } else {
            const error_text = "При отправке формы возникли ошибки:\n - ";
            alert(error_text + state.singleItem.response.errors.join("\n - "));
        }
    })

    // Управление доступность кнопки Отправить запрос в зависимости от того согласился ли пользователь с политикой
    const policyCheckbox = document.querySelector("#policy")
    policyCheckbox.addEventListener('click', function() {
        document.querySelector(".modal__submit").disabled = !policyCheckbox.checked;
    })

    /*
     *  Избранное
     */

     // Отрисовываем кнопку избранного в нужном состоянии
     document.querySelector('#favourite-container').addEventListener('click', function() {
        state.favourites.toggle(state.singleItem.id)
        view.renderFavoriteButton(state.favourites.isFavourites(state.singleItem.id));
     })

}