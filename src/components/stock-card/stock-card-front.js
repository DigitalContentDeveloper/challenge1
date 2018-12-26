class StockCardFront extends HTMLElement {
    // define attributes
    get imgURL() {
        return this.hasAttribute('imgURL');
    }
    set imgURL(val) {
        if (val) {
            this.setAttribute('imgURL',val);
        } else {
            this.removeAttribute('imgURL');
        }
    }

    get altText() {
        return this.hasAttribute('altText');
    }

    set altText(val) {
        if (val) {
            this.setAttribute('altText',val);
        } else {
            this.removeAttribute('altText');
        }
    }

    constructor() {
        super();

        // ownerDocument references this component document being imported
        var thisImportDoc = document.currentScript.ownerDocument; 
        var root = this.attachShadow({mode:'open'});

        // Get the template from this file, clone it,
        // and append it to the importing document.
        var tmplNode = thisImportDoc.querySelector('template').content;

        // the "document" keyword here references the "main" document
        // (the one that's importing this HTML file)
        var clone = document.importNode(tmplNode, true);
        root.appendChild(clone);
    }


    /** TODO: observedAttributes is used to indicate which attributes 
        will trigger the attributeChangedCallback function **/


    /** Custom element lifecycle functions **/
    connectedCallback() {
        console.log('stock-card connected to page');
        // TODO: set the initial state of the visible property
    }

    disconnectedCallback() {
        console.log('stock-card disconnected from page');
    }

    adoptedCallback() {
        console.log('stock-card adopted in page');                
    }

    attributeChangedCallback(name, oldValue, newValue) {

    }

    /** TODO: Expose the visible attribute as getter and setter **/     
}

customElements.define('stock-card-front', StockCardFront);
