// import * as formatHelper from "./../utils/formatHelpers"



export function renderResultContainer() {
    let content = `
    <div class="cards-wrapper">
        <div class="container p-0 pt-5">
            <div id="result-container" class="row">
                
            </div>
        </div>
    </div>`

    document.querySelector('#app').insertAdjacentHTML('beforeEnd', content);
}

export function clearCardsList() {
    document.querySelector('#result-container').innerHTML = "";
}

