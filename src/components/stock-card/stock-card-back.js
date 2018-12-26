// Create custom HTML element
class StockCardBack extends HTMLElement {
    // define attributes
    get currency() {
        return this.hasAttribute('currency');
    }
    set currency(val) {
        if (val) {
            this.setAttribute('currency',val);
        } else {
            this.removeAttribute('currency');
        }
    }

    get chartColour() {
        return this.hasAttribute('chartColour');
    }

    set chartColour(val) {
        if (val) {
            this.setAttribute('chartColur',val);
        } else {
            this.removeAttribute('chartColour');
        }
    }

    constructor() {
        super();

        // ownerDocument references this component document being imported
        var thisImportDoc = document.currentScript.ownerDocument; 
        var root = this.attachShadow({mode: 'open'});

        // Get the template from this file, clone it,
        // and append it to the importing document.
        var tmplNode = thisImportDoc.querySelector('template').content;

        // the "document" keyword here references the "main" document
        // (the one that's importing this HTML file)
        var clone = document.importNode(tmplNode, true);
        root.appendChild(clone);

        // Set a click event handler on the View currency info link
        var linkElement = this.shadowRoot.querySelector('.btn-flip-card-back');
        linkElement.addEventListener('click', e => {
            this.flipCardBack(e);
        });
    }

    init() {
        let stockdata_JSON = [];
        let currencydata_JSON = [];
        let currency = this.getAttribute('currency');
        let stockdata_JSON_URL = './assets/js/20180507.json';

        // get stock pricing data from json using a promise
        fetch(stockdata_JSON_URL)
            .then((response) => response.text())
            .then((responseText) => {
                stockdata_JSON = JSON.parse(responseText);
                // filter json object to this card's currency
                currencydata_JSON = this.filterCurrencyJSON(stockdata_JSON, currency);
                // use data to plot chart and show max profit
                this.loadChart(currencydata_JSON);
                this.showProfit(currencydata_JSON);
            })
            .catch((error) => {
                console.error(error);
            })
    }

    //filter JSON object to show only single currency
    filterCurrencyJSON(jsonObj, currency) {
        for (var i = 0; i < jsonObj.length; i++) {
            if (jsonObj[i].currency == currency) {
                return jsonObj[i];
            }
        }
    }

    // uses chartjs to plot chart - below is configuration which takes in json object from init() call, and uses custom element's attributes for customisation
    loadChart(jsonData) {
        let chartElement = this.shadowRoot.querySelector('canvas');
        let chartColour = this.getAttribute('chartColour');

        var stockChart = new Chart(chartElement, {
            type: 'line',
            label: 'Stock price',
            data: {
                labels: [jsonData.quotes[0].time,jsonData.quotes[1].time,jsonData.quotes[2].time,jsonData.quotes[3].time,jsonData.quotes[4].time],
                datasets: [{
                    label: jsonData.currency,
                    borderColor: chartColour,
                    backgroundColor: chartColour,
                    data: [jsonData.quotes[0].price,jsonData.quotes[1].price,jsonData.quotes[2].price,jsonData.quotes[3].price,jsonData.quotes[4].price],
                    fill: false
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                title: {
                    display: true,
                    text: 'Historical stock prices'
                },
                scales: {
                    xAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Time'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Price ($)'
                        }
                    }]
                }
            }
        });
    }

    // create an Array of only price values
    createPriceArray(jsonObj) {
        let priceArray = [];
        for (var i = 0; i < jsonObj.quotes.length; i++) {
            priceArray.push(jsonObj.quotes[i].price);
        }
        return priceArray;
    }

    showProfit(jsonData) {
        // creates an array of prices, gets max and min values, and calculates maximum profit using them
        let currencyPriceArray = this.createPriceArray(jsonData);
        let maxPrice = Math.max(...currencyPriceArray);
        let minPrice = Math.min(...currencyPriceArray);
        let profit = (maxPrice - minPrice).toFixed(2);
        
        // outputs profit into HTML node
        this.shadowRoot.getElementById('profit').innerText = `Maximum profit: $${profit}`;
    }

    flipCardBack(event) {
        // prevent default behaviour of card, change class, which animates flip, and sets tabIndex for accessibility purposes (skip when on back side, tab to when visible)
        event.preventDefault();
        let cardElement = this.parentNode;
        cardElement.classList.toggle('flipped');
        this.shadowRoot.querySelector('.btn-flip-card-back').tabIndex = -1;
        cardElement.querySelector('.btn-flip-card').tabIndex = 0;
    }

    /** Custom element lifecycle functions **/
    connectedCallback() {
        this.init();
    }

    disconnectedCallback() {
        // console.log('stock-card disconnected from page');
    }

    adoptedCallback() {
        // console.log('stock-card adopted in page');                
    }

    attributeChangedCallback(name, oldValue, newValue) {

    }

    
}

// register custom HTML element
customElements.define('stock-card-back', StockCardBack);