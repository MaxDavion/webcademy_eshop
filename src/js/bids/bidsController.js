import * as view from "./bidsView";
import Bids from "./bidsModel"

export default async function(state) {
    // Отрисовываем контейнер под список заявок
    view.renderContainer();

    // Получаем список заявок с сервера и отрисовываем их
    if (!(state.bids)) state.bids = new Bids();
    await state.bids.getBids();
    state.bids.result.forEach((item) => {
        view.renderBidCard(item);
    })
    
}