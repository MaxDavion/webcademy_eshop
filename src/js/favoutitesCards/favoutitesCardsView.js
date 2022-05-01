// import * as formatHelper from "./../utils/formatHelpers"

export function renderFavouritesContainer() {
    let content = `
    <div class="container p-0 mb-4">
        <div class="heading-1">Избранное</div>
    </div>

    <!-- cards-wrapper -->
    <div class="cards-wrapper">
        <div class="container p-0">
            <!-- row -->
            <div id="result-container" class="row">

            </div>
        </div>
    </div>`

    document.querySelector('#app').insertAdjacentHTML('beforeEnd', content);
}

export function showEmptyFavouritesContainer() {
    let content = `
    <div class="container p-0 mb-4">
        <p>Ваш список избранного пуст.</p>
    </div>
    `

    document.querySelector('#app').insertAdjacentHTML('beforeEnd', content)
}
