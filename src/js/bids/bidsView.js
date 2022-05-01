export function renderContainer() {
    const content = `
    <div class="container p-0 mb-5">
        <div class="heading-1">Заявки</div>
        </div>

        <!-- panels-wrapper -->
        <div class="panels-wrapper">
            <div id="bids-list" class="container p-0">
                <!-- panel -->
            </div>
        </div>
        <!-- // panels-wrapper -->
    </div>`;

    document.querySelector('#app').insertAdjacentHTML("beforeEnd", content);
}

export function renderBidCard(bid) {
    const content = `
    <div class="panel panel--no-hover">
        <div class="panel__bidid">${bid.id}</div>
        <div class="panel__bidname">${bid.name}</div>
        <div class="panel__bidphone">${bid.phone}</div>
    </div>`;

    document.querySelector('#bids-list').insertAdjacentHTML("beforeEnd", content);
}