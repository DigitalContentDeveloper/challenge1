var buttonElements = document.getElementsByClassName('btn-flip-card');

// assign click event to View pricing data buttons
for (var i = 0; i < buttonElements.length; i++) {
    buttonElements[i].addEventListener('click', flipCard, false);
}

// mimic flip card event used in custom HTML element
// TODO - use the same function for both
function flipCard(event) {
    event.preventDefault();
    let cardElement = this.parentNode.parentNode;
    cardElement.classList.add('flipped');
    this.tabIndex = -1;
    cardElement.querySelector('stock-card-back').shadowRoot.querySelector('.btn-flip-card-back').tabIndex = 0;
}