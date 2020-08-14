class ContadorTitila extends HTMLElement {
    constructor(){
      super();
      cargarTemplate("#tabifit-contadortitila", this);    
     }
    }
    
     customElements.define ("tabifit-contadortitila", ContadorTitila);